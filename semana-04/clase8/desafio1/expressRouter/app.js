const express = require("express");
const app = express();
const path = require("path");

const index = require("./routes/index");
const mascotas = require("./routes/mascotas.js");
const personas = require("./routes/personas.js");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/mascotas", mascotas);
app.use("/personas", personas);

PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
