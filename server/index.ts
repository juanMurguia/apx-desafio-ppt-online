import express from "express";
import { fireStore, rtdb } from "./db.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3005;

// Definir orígenes permitidos para CORS
const allowedOrigins = [
  "https://desafiopptonline.netlify.app", // Producción
  "http://localhost:1234", // Local
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Permitir si está en los orígenes permitidos
    } else {
      callback(new Error("Not allowed by CORS")); // Bloquear si no está en la lista
    }
  },
  optionsSuccessStatus: 200, // Asegura un buen estatus para navegadores antiguos
};

// Configurar CORS
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Obtener __dirname correctamente en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server running on port:", port);
});

const usersCollection = fireStore.collection("users");
const roomsCollection = fireStore.collection("rooms");

app.get("/env", async (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});

// Ruta para obtener el historial de una sala
app.get("/history/:id", async (req, res) => {
  const roomSnapshot = await roomsCollection.doc(req.params.id).get();

  if (!roomSnapshot.exists) {
    return res.status(201).json({ history: "createDashboard" });
  }

  return res.status(200).json({ history: roomSnapshot.data() });
});

// Ruta para guardar el historial de una sala
app.post("/history/save/:id", async (req, res) => {
  const scoreboard = req.body;
  const roomRef = roomsCollection.doc(req.params.id);
  const snapshot = await roomRef.get();

  if (snapshot.exists) {
    await roomRef.update({ scoreboard });
    return res.status(202).json({ message: "updated" });
  } else {
    return res.status(404).json({ message: "room not found" });
  }
});

// Ruta de autenticación de usuarios
app.post("/auth", async (req, res) => {
  const data = req.body;
  const { name, scoreboard } = data.gameState;

  const chekingIfUserExists = await usersCollection
    .where("name", "==", name)
    .get();

  if (!chekingIfUserExists.empty) {
    chekingIfUserExists.forEach((doc) => {
      return res.status(200).json({ usrId: doc.id });
    });
  } else {
    const newUserIdRef = await usersCollection.add({ name, scoreboard });
    return res.json({ success: true, usrId: newUserIdRef.id });
  }
});

// Ruta para crear una nueva sala
app.post("/rooms", async (req, res) => {
  const { gameState } = req.body;
  const snapshot = await usersCollection.doc(gameState.usrId).get();

  if (snapshot.exists) {
    const roomRef = rtdb.ref("rooms/" + uuidv4());
    await roomRef.set({ owner: gameState });

    const publicRoomId = 1000 + Math.floor(Math.random() * 999);
    await roomsCollection.doc(publicRoomId.toString()).set({
      rtdbId: roomRef.key,
      owner: gameState.usrId,
    });

    return res.json({
      success: true,
      roomId: publicRoomId.toString(),
      privateRoomId: roomRef.key,
    });
  } else {
    return res.status(401).json({ message: "unauthorized" });
  }
});

// Ruta para acceder a una sala existente
app.post("/room/:id", async (req, res) => {
  const { gameState } = req.body;
  const userSnapshot = await usersCollection.doc(gameState.usrId).get();
  const roomSnapshot = await roomsCollection.doc(gameState.publicId).get();

  if (!userSnapshot.exists) {
    return res.status(401).json({ message: "Access denied, log in required" });
  }

  if (!roomSnapshot.exists) {
    return res.status(404).json({ message: "Room not found" });
  }

  const realTimeDbId = roomSnapshot.data();
  return res.json({ success: true, privateId: realTimeDbId.rtdbId });
});

// Ruta para jugar en una sala
app.post("/room/:id/play", async (req, res) => {
  const { gameState } = req.body;
  const userSnapshot = await usersCollection.doc(gameState.usrId).get();
  const roomSnapshot = await roomsCollection.doc(gameState.publicId).get();

  if (!userSnapshot.exists) {
    return res.status(401).json({ message: "Access denied, log in required" });
  }

  if (!roomSnapshot.exists) {
    return res.status(404).json({ message: "Room not found" });
  }

  const roomRef = rtdb.ref(`rooms/${gameState.privateId}`);

  if (gameState.owner) {
    await roomRef.update({ owner: gameState });
    return res.json({ success: true });
  } else if (!gameState.owner) {
    await roomRef.update({ guest: gameState });
    return res.json({ success: true });
  }
});

// Ruta para unirse a una sala
app.post("/room/:id/join", async (req, res) => {
  const { gameState } = req.body;
  const userSnapshot = await usersCollection.doc(gameState.usrId).get();
  const roomSnapshot = await roomsCollection.doc(gameState.publicId).get();

  if (!userSnapshot.exists) {
    return res.status(401).json({ message: "Access denied, log in required" });
  }

  if (!roomSnapshot.exists) {
    return res.status(404).json({ message: "Room not found" });
  }

  const roomRef = rtdb.ref(`rooms/${gameState.privateId}`);
  await roomRef.update({ guest: gameState });
  return res.json({ success: true });
});
