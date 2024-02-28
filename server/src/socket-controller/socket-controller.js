const establishSocketConnection = (socket, io) => {
  console.log("Cliente conectado");

  // contador
  socket.on("counter", (data) => {
    console.log(data);
    io.emit("responseCounter", data);
  });

  // form
  socket.on("message", (data) => {
    console.log(data);
    io.emit("responseMessages", data);
  });
  // users
  socket.on("users", (data) => {
    console.log(data);
    io.emit("responseUsers", data);
  });
};

module.exports = establishSocketConnection;
