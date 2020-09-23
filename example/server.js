const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");

const startSocketIo = require("./socketio/socketio-server");
const sseRequestHandler = require("./sse/sse-server");
const startWebsocketServer = require("./websocket/websocket-server");

app.use(cors());
app.get("/last-sse", sseRequestHandler);
app.get("/all-sse", sseRequestHandler);

startSocketIo(io);
startWebsocketServer(server);

server.listen(3000, () => console.log("listening on *:3000"));
