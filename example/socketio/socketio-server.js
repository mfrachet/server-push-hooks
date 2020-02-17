const startSocketIo = io => {
  io.on("connection", function(socket) {
    socket.on("one-last-message", () => {
      socket.emit("last-messages", "This is one new message");
    });

    socket.on("three-last-messages", () => {
      socket.emit("last-messages", "This is one new message");
      socket.emit("last-messages", "This is a second new message");
      socket.emit("last-messages", "This is a third new message");
    });

    socket.on("three-messages", () => {
      socket.emit("new-message", "This is one new message");
      socket.emit("new-message", "This is a second new message");
      socket.emit("new-message", "This is a third new message");
    });
  });
};

module.exports = startSocketIo;
