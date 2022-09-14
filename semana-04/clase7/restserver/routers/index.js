const { Router } = require("express");
const express = require("express");
const index = express.Router();

index.get("/autos/getAll", (req, res) => {
  res.send({ msg: "Recibimos una peticion de tipo get getAll" });
});

index.get("/autos/:id", ({ params }, res) => {
  console.log(params);
  res.send({ msg: "recibimos peticion de id", id: params.id });
});

index.get("/autos", ({ query }, res) => {
  console.log(query);
  res.json({
    msg: `Recibimos una busqueda del auto: ${query.producto} `,
  });
});

index.post("/autos/update", ({ body }, res) => {
  console.log(body);
  res.send({
    msg: "recibi petision de metodo post",
    name: body.name,
    apellido: body.apellido,
  });
});
module.exports = index;
