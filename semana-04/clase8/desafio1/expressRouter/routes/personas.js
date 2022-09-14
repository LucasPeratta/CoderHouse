const express = require("express");
const router = express.Router();

let personas = [];

/* GET home page. */
router.get("/", (req, res) => {
  res.send(personas);
});

router.post("/", (req, res) => {
  personas = [...personas, req.body];
  res.send(req.body);
});

module.exports = router;
