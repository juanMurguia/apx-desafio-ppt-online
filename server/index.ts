import express  from "express"
import { firestore, rtdb } from "./db.js"
import { v4 as uuidv4 } from 'uuid';
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.static("../dist"))
app.listen(port,() => {
    console.log('api corriendo en ', port)
})

app.post('/users', async (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensaje: 'Por favor, completa todos los campos.' });
    }

    try {
        const nuevoUsuario = {
            nombre: nombre,
            id: uuidv4(),
        };

        const docRef = await firestore.collection('users').add(nuevoUsuario);

        res.status(201).json({
            mensaje: 'Usuario creado con éxito',
            id: docRef.id,
            usuario: nuevoUsuario
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al crear el usuario',
            error: error.message
        });
    }
});

function main ()  {
    console.log('servidor corriendo jaja')
}

main();
