import express from "express";
import { fireStore, rtdb } from "./db.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = process.env.PORT || 3005;
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width, Content-Type,Accept,Authorization");
    next();
});
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});
app.listen(port, () => {
    console.log("Server running on port:", port);
});
// Rutas de la API
const usersCollection = fireStore.collection("users");
const roomsCollection = fireStore.collection("rooms");
app.get("/env", async (req, res) => {
    res.json({
        environment: process.env.NODE_ENV,
    });
});
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
    }
    else {
        return res.status(404).json({ message: "room not found" });
    }
});
app.post("/auth", async (req, res) => {
    try {
        const data = req.body;
        if (!data.gameState) {
            return res.status(400).json({ error: "Invalid request data" });
        }
        const { name, scoreboard } = data.gameState;
        const checkingIfUserExists = await usersCollection
            .where("name", "==", name)
            .get();
        if (!checkingIfUserExists.empty) {
            const userDoc = checkingIfUserExists.docs[0]; // Cambiado para obtener solo el primer documento
            return res.status(200).json({ usrId: userDoc.id });
        }
        else {
            const newUserIdRef = await usersCollection.add({ name, scoreboard });
            return res.status(201).json({ success: true, usrId: newUserIdRef.id });
        }
    }
    catch (error) {
        console.error("Error in /auth:", error); // Registra el error en la consola del servidor
        return res.status(500).json({ error: "Internal Server Error" });
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
    }
    else {
        return res.status(401).json({ message: "unauthorized" });
    }
});
app.post("/test", async (req, res) => {
    try {
        const { name } = req.body;
        // Verifica que se haya enviado un nombre
        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        }
        // Agrega el nombre a la colección 'test'
        const newDocRef = await fireStore.collection("test").add({ name });
        // Responde con el ID del nuevo documento
        return res.status(201).json({ success: true, docId: newDocRef.id });
    }
    catch (error) {
        console.error("Error in /test:", error);
        return res.status(500).json({ error: "Internal Server Error" });
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
    }
    else if (!gameState.owner) {
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
const filePath = path.resolve(__dirname, "../dist", "index.html");
console.log("Serving file from:", filePath);
