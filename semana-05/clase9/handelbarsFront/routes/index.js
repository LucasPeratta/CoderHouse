var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    nombre: "lucas",
    apellido: "peratta",
    edad: "20",
    email: "@",
    telefono: "213421",
  });
});

module.exports = router;
