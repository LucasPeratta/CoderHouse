const express = require("express");
const { route } = require("./mascotas");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("inicio");
});

module.exports = router;
