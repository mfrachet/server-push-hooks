const startSocketIoServer = require("./socketio/socketio-server");
const startSSEServer = require("./sse/sse-server");
const startWebsocketServer = require("./websocket/websocket-server");

startSocketIoServer();
startSSEServer();
startWebsocketServer();
