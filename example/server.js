const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/server-sent", function(req, res) {
  res.set("Content-Type", "text/event-stream");

  const data = { hello: "world" };

  res.write(`data: ${JSON.stringify(data)}`);
  res.write("\n\n");
});

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

http.listen(3000, function() {
  console.log("listening on *:3000");
});
