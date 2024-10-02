import express from "express";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore, rtdb } from "./db.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { ref, set, update } from "firebase/database";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("../dist"));
app.listen(port, () => {
  console.log("api corriendo en ", port);
});

const userCollection = collection(firestore, "users");
const roomCollection = collection(firestore, "rooms");

app.post("/users", async (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res
      .status(400)
      .json({ mensaje: "Por favor, completa todos los campos." });
  }

  try {
    const nuevoUsuario = {
      nombre: nombre,
      id: uuidv4(),
    };

    const docRef = await addDoc(userCollection, nuevoUsuario);

    res.status(201).json({
      mensaje: "Usuario creado con éxito",
      id: docRef.id,
      usuario: nuevoUsuario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el usuario",
      error: error.message,
    });
  }
});

app.post("/room/:roomId/play", async (req, res) => {
  const { gameState } = req.body;
  const { roomId } = req.params;

  try {
    const userSnapshot = await getDoc(doc(userCollection, gameState.userId));
    const roomSnapshot = await getDoc(doc(roomCollection, roomId));

    if (!userSnapshot.exists()) {
      return res
        .status(401)
        .json({ message: "Access denied, log in required" });
    }

    if (!roomSnapshot.exists()) {
      return res.status(404).json({ message: "Room not found" });
    }

    const roomData = roomSnapshot.data();
    const rtdbRoomId = roomData.rtdbRoomId;

    if (!rtdbRoomId) {
      return res.status(500).json({ message: "RTDB Room ID not found" });
    }
    const roomRef = ref(rtdb, `rooms/${rtdbRoomId}`);

    if (gameState.owner) {
      await update(roomRef, {
        owner: gameState,
      });
      return res.json({ success: true });
    } else if (!gameState.owner) {
      await update(roomRef, {
        guest: gameState,
      });
      return res.json({ success: true });
    }
  } catch (error) {
    console.error("Error during play update:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.get("/users/:userId", async function (req, res) {
  const userId = req.params.userId;

  try {
    const userDocRef = doc(userCollection, userId);

    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      res.status(201).json({
        mensaje: "Usuario obtenido con éxito",
        id: userId,
        usuario: userData.nombre,
      });
    } else {
      // Maneja el caso donde el documento no existe
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener el usuario", error: error.message });
  }
});

app.post("/rooms", async (req, res) => {
  const gameState = req.body;

  try {
    const userDocRef = doc(userCollection, gameState.userId.toString());
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const roomRef = ref(rtdb, "rooms/" + uuidv4());

      await set(roomRef, {
        messages: [],
        owner: gameState,
      });

      const roomLongId = roomRef.key;

      const roomId = 1000 + Math.floor(Math.random() * 999);

      const roomDocRef = doc(roomCollection, roomId.toString());
      await setDoc(roomDocRef, {
        rtdbRoomId: roomLongId,
      });

      res.json({
        id: roomId.toString(),
      });
    } else {
      res.status(401).json({
        message: "No existe el usuario",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la sala",
      error: error.message,
    });
  }
});

app.get("/rooms/:roomId", async (req, res) => {
  const { userId } = req.query;
  const { roomId } = req.params;

  try {
    const userDocRef = doc(userCollection, userId?.toString() || "");
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const roomDocRef = doc(roomCollection, roomId.toString());
      const roomSnap = await getDoc(roomDocRef);

      if (roomSnap.exists()) {
        const data = roomSnap.data();
        res.json(data);
      } else {
        res.status(404).json({
          message: "No existe la sala",
        });
      }
    } else {
      res.status(401).json({
        message: "No existe el usuario",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la sala",
      error: error.message,
    });
  }
});

app.post("/room/:roomId", async (req, res) => {
  const { roomId } = req.params;
  const { gameState } = req.body;

  try {
    // Buscar la sala en Firestore usando el ID público
    const roomDocRef = doc(roomCollection, roomId.toString());
    const roomSnapshot = await getDoc(roomDocRef);

    if (!roomSnapshot.exists()) {
      return res.status(404).json({ message: "Room not found" });
    }

    // Obtener el rtdbRoomId
    const roomData = roomSnapshot.data();
    const rtdbRoomId = roomData.rtdbRoomId;

    // Responder con el rtdbRoomId
    return res.json({ privateId: rtdbRoomId });
  } catch (error) {
    console.error("Error al obtener el rtdbRoomId:", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.post("/room/:id/join", async (req, res) => {
  const { gameState } = req.body;

  try {
    // Chequear si gameState tiene los campos necesarios
    if (
      !gameState ||
      !gameState.userId ||
      !gameState.roomId ||
      !gameState.rtdbRoomId
    ) {
      console.error("Datos del estado incompletos:", gameState);
      return res.status(400).json({ message: "Invalid gameState data" });
    }

    // Buscar el usuario en Firestore
    const userSnapshot = await getDoc(doc(userCollection, gameState.userId));
    const roomSnapshot = await getDoc(doc(roomCollection, gameState.roomId));

    // Chequear si existe el usuario y la sala
    if (!userSnapshot.exists()) {
      return res
        .status(401)
        .json({ message: "Access denied, log in required" });
    }

    if (!roomSnapshot.exists()) {
      return res.status(404).json({ message: "Room not found" });
    }

    // Si el usuario y la sala existen
    const roomRef = ref(rtdb, `rooms/${gameState.rtdbRoomId}`); // Obtén la referencia al nodo en la base de datos

    // Guardar la data del player 2 (guest)
    await update(roomRef, {
      guest: {
        name: gameState.name,
        userId: gameState.userId,
        online: gameState.online,
        ready: gameState.ready,
        owner: false, // Es un guest, no es el owner
        gameReady: gameState.gameReady,
        playersReady: gameState.playersReady,
        currentGame: gameState.currentGame,
        history: gameState.history,
      },
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Error al unirse a la sala:", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

function main() {}

main();
