const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");

const prepareSocketIoConnections = require("./socketio/socketio-server");
const sseRequestHandler = require("./sse/sse-server");
const prepareWebsocketConnections = require("./websocket/websocket-server");

const createHttpServer = () => {
  const app = express();
  const server = http.createServer(app);

  app.use(cors());

  return { server, app };
};

// Socket io
const { server: socketIoServer } = createHttpServer();
const io = socketIo(socketIoServer);
prepareSocketIoConnections(io);
socketIoServer.listen(3000, () =>
  console.log(`[Socket.io] Started on port 3000`)
);

// SSE
const { server: sseServer, app: appSSE } = createHttpServer();
appSSE.get("/last-sse", sseRequestHandler);
appSSE.get("/all-sse", sseRequestHandler);
sseServer.listen(3123, () => {
  console.log(`[SSE] Started on port 3123`);
});

// Websocket
const { server: websocketServer } = createHttpServer();
prepareWebsocketConnections(websocketServer);
websocketServer.listen(3124, () => {
  console.log(`[Websocket] Started on port 3124`);
});
