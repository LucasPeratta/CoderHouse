//lado del cliente
const socket = io(); //para usar los sockets desde el cliente

//para recibir la informacion del servidor
socket.on("mensajes", (data) => {
  console.log(data);
  document.getElementById("msg").innerHTML = data;
});

socket.on("respuestaServer", (data) => {
  alert(data.msg);
  document.getElementById("btn").addEventListener("click", () => {
    let msg = document.getElementById("mensaje").value;
    socket.emit("respuesta", msg);
  });
});

socket.on("notificacion", (data) => {
  data.map((m) => (document.getElementById("msg").innerHTML += `<p>${m}</p>`));
});
