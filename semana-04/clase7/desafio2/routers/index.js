const { query } = require("express");
const express = require("express");
const index = express.Router();

module.exports = index;

index.get("/sumar/:num1/:num2", ({ params }, res) => {
  const num1 = parseInt(params.num1);
  const num2 = parseInt(params.num2);
  res.send({ suma: num1 + num2 });
});

index.get("/sumar", ({ query }, res) => {
  const num1 = parseInt(query.num1);
  const num2 = parseInt(query.num2);
  res.send({ msg: `La suma entre ${num1} y ${num2} es ${num1 + num2}` });
});

index.get("/operacion/:operacion", ({ params }, res) => {
  const operacion = params.operacion;
  res.send({ operacion: eval(operacion) });
});

index.post("/", (req, res) => {
  res.send({ msg: "OK POST" });
});
index.put("/", (req, res) => {
  res.send({ msg: "OK PUT" });
});
index.delete("/", (req, res) => {
  res.send({ msg: "OK DELETE" });
});
