const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
let messages = [
  { author: "Juan", text: "Hola ¿Qué tal?" },
  { author: "Pedro", text: "Muy Bien y vos?" },
  { author: "Ana", text: "Geinal!" },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

const server = httpServer.listen(8080, () => {
  console.log(`El servidor está escuchando por el puerto 8080`);
});
server.on("error", (err) => {
  console.log(err);
});
io.on("connection", (socket) => {
  console.log("se conecto un cliente");
  //para enviar
  socket.emit("messages", messages);

  socket.on("new-message", (data) => {
    // messages.push(data);
    messages = [...messages, data];
    io.sockets.emit("messages", messages);
  });
});

// //lado del servidor
// const express = require("express");
// const { Server: HttpServer } = require("http");
// const { Server: IOServer } = require("socket.io");

// const app = express();
// const httpServer = new HttpServer(app);
// const io = new IOServer(httpServer);
// const messages = [
//   { author: "Juan", text: "Hola  que tal" },
//   { author: "Pedro", text: "Hola  todo bien" },
//   { author: "Lucas", text: "Hola  muy bien" },
// ];

// //cargamos los archivos estaticos q se encuentarn en la carpeta public
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile("index.html", { root: __dirname });
// });

// io.on("connection", (socket) => {
//   console.log("Se conecto un cliente");
//   //envio msg al cliente q se conecto
//   socket.emit("menssages", messages);
//   //recibo mensaje nuevo
//   socket.on("new-message", (data) => {
//     mesagges.push(data);
//     //enviar mensaje a todos los clientes
//     io.sockets.emit("messages", messages);
//   });
// });

// httpServer.listen(8080, console.log(`Server ON en puerto 8080`));
