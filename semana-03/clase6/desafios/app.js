const express = require("express");
const app = express();

const PORT = 8080;
let visitas = 0;

app.get("/", (req, res) => {
  res.send("Nivel 1 ");
});

app.get("/visitas", (req, res) => {
  visitas++;
  res.send(`La cantidad de visitas son: ${visitas}`);
});

app.get("/fyh", (req, res) => {
  res.send({ fyh: new Date().toDateString() });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${8080}`);
});
