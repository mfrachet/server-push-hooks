const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

const startSocketIo = require("./socketio/socketio-server");
const sseRequestHandler = require("./sse/sse-server");

app.use(cors());
app.get("/last-sse", sseRequestHandler);
app.get("/all-sse", sseRequestHandler);

startSocketIo(io);

http.listen(3000, () => console.log("listening on *:3000"));
