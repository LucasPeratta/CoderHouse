const express = require("express");
const app = express();

const Contenedor = require("./Contenedor");
const productos = new Contenedor("./productos.txt");

const PORT = 8080;

app.get("/productos", (req, res) => {
  productos
    .getAll()
    .then((objetos) => res.send(objetos))
    .catch((error) => console.log([]));
});

app.get("/productoRandom", async (req, res) => {
  const id = await productos.idAleatorio();
  console.log(id);
  productos
    .getById(id)
    .then((objeto) => res.send(objeto))
    .catch((error) => res.send([]));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
