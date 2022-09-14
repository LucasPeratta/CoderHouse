const express = require("express");
const router = express.Router();

let mascotas = [];

/* GET home page. */
router.get("/", (req, res) => {
  res.send(mascotas);
});

router.post("/", ({ body }, res) => {
  mascotas = [...mascotas, body];
  res.send(body);
});

module.exports = router;
