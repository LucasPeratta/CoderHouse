const express = require("express");
const index = express.Router();

const frase = "Hola mundo como estan";

index.get("/api/frase", (req, res) => {
  res.json({ frase: frase });
});

index.get("/api/letras/:num", ({ params }, res) => {
  const num = parseInt(params.num);
  console.log(num);
  if (isNaN(num)) {
    res.json({ error: "El parametro no es un numero" });
  }
  if (num < 1 || num > frase.length) {
    res.json({ error: "El parametro esta fuera del rango" });
  }

  res.json({ letra: frase[num - 1] });
});

index.get("/api/palabras/:num", ({ params }, res) => {
  const num = parseInt(params.num);
  console.log(num);
  if (isNaN(num)) {
    res.json({ error: "El parametro no es un numero" });
  }
  const palabras = frase.split(" ");
  if (num < 1 || num > palabras.length) {
    res.json({ error: "El parametro esta fuera del rango" });
  }

  res.json({ palabra: palabras[num - 1] });
});

module.exports = index;
