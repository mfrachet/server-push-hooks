const socketIo = require("socket.io");
const createHttpServer = require("../server-helpers");
const { port } = require("./constants");

const startSocketIoServer = () => {
  const { server: socketIoServer } = createHttpServer();
  const io = socketIo(socketIoServer, { 
    cors: {
      origin: "http://localhost:1234",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", function (socket) {
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

  socketIoServer.listen(port, () =>
    console.log(`[Socket.io] Started on port :${port}`)
  );
};

module.exports = startSocketIoServer;
