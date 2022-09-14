const http = require("http");

const hora = new Date().getHours();
// const hora = 14;
// const hora = 20;

const server = http.createServer((req, res) => {
  if (hora >= 6 && hora <= 12) {
    res.end("Buenos Dias");
  } else if (hora >= 13 && hora <= 19) {
    res.end("Buenos Tardes");
  } else if ((hora >= 20 && hora <= 23) || (hora >= 0 && hora <= 5)) {
    res.end("Buenos Noches");
  }
});

const PORT = 8081;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
