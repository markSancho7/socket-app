const allUsers = [];
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
    io.emit("responseMessages", { ...data, username: socket.username });
  });
  // users
  socket.on("login", (username) => {
    socket.username = username;
    allUsers.push({ id: socket.id, username });
    io.emit("responseUsers", allUsers);
  });
  io.emit("responseUsers", allUsers);
};

module.exports = establishSocketConnection;
