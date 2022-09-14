const express = require("express");
const app = express();
const index = require("./routers/index");

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", index);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
