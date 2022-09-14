//lado del servidor
const express = require("express");
const { Server: HttpServer } = require("http");
// const { dirname } = require("path");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
let mensajes = [];

//cargamos los archivos estaticos q se encuentarn en la carpeta public
app.use(express.static("../public"));

app.get("/", (req, res) => {
  //   res.sendFile("index.html", { root: __dirname });
  res.send({ msg: "ok" });
});

httpServer.listen(8080, console.log(`Server ON en puerto 8080`));

io.on("connection", (socket) => {
  console.log("Se conecto un cliente");
  console.log(socket.id);
  socket.emit("mensajes", "La comunicacion esta establecida!"); //mensaje de nuestro servidor al cliente
  socket.emit("respuestaServer", { msg: "Hola buen dia" });
  socket.on("respuesta", (data) => {
    mensajes.push(data);
    console.log(mensajes);
    io.sockets.emit("notificacion", mensajes);
  });
});
