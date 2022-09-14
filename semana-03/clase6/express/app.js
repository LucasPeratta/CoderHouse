const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/usuarios", (req, res) => {
  res.send("usuarios");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${8080}`);
});
