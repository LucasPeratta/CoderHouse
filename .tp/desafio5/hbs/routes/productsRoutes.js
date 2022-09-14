const express = require("express");
const router = express.Router();
const ContenedorMemoria = require("../contenedor/contenedorMemoria");
const listaProductos = new ContenedorMemoria();

router.get("/mostrarproductos", (req, res) => {
  const data = listaProductos.getAll();
  if (data.length == 0) {
    res.send({ msg: "No hay productos" });
  }
  res.render("productos", { productos: data });
});

router.get("/agregarProducto", (req, res) => {
  res.render("agregarProducto");
});

router.post("/", (req, res) => {
  listaProductos.addOne(req.body);
  res.redirect("/productos/agregarProducto");
});

module.exports = router;
