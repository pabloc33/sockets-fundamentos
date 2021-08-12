var socket = io();
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

// on -> ecuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// emit -> enviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Pablo",
    mensaje: "Hola mundo",
  },
  function (resp) {
    console.log("respuesta server: ", resp);
  }
);

// escuchar información
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});
