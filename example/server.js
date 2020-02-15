const http = require("http");
const io = require("socket.io")(http);

const serverSentEventsHandler = (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Access-Control-Allow-Origin": "*"
  });

  const data = { hello: "world" };

  res.write(`data: ${JSON.stringify(data)}`);
  res.write("\n\n");
};

const server = http.createServer(serverSentEventsHandler);

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

server.listen(3000, function() {
  console.log("listening on *:3000");
});
