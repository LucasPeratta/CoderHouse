const express = require("express");
const router = express.Router();
const ContenedorMemoria = require("../contenedor/contenedorMemoria");

const data = new ContenedorMemoria();

router.get("/", (req, res) => {
  res.send({ data: data.getAll() });
});

router.get("/:id", ({ params: { id } }, res) => {
  let obj = data.getOne(id);
  if (obj.length == 0) {
    res.send({ error: "producto no encontrado" });
  }
  res.send({ data: obj });
});

router.post("/", ({ body }, res) => {
  data.addOne(body);
  res.status(201).send({ datos: body });
});

router.put("/:id", (req, res) => {
  let obj = data.updateOne(req.params.id, req.body);
  res.send({ datos: obj });
});

router.delete("/:id", ({ params }, res) => {
  if (!data.deleteOne(params.id)) {
    res.send({ error: "Producto no encontrado" });
  }
  res.send({ msg: "Producto eliminado" });
});

module.exports = router;
