import { ContenedorMongoDb } from './ContenedorMongoDb.js';

// const contenedorPersonas = new Contenedor()
const contenedorPersonas = new ContenedorMongoDb('personas', {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
})

export async function getController(req, res) {
    const personas = await contenedorPersonas.obtenerTodas();
    res.json(personas);
}
