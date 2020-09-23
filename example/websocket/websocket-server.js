const WebSocket = require("ws");

const startWebsocketServer = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", function connection(ws) {
    const sendMessage = (type, message) => {
      ws.send(JSON.stringify({ type, message }));
    };

    ws.on("message", function incoming(message) {
      switch (message) {
        case "one-last":
          sendMessage("one-last", "One last message");
          break;

        case "three-last-messages":
          sendMessage("three-last-messages", "One last message of three");
          sendMessage("three-last-messages", "Two last message of three");
          sendMessage("three-last-messages", "Three last message of three");

          break;

        case "all-messages":
          sendMessage("all-messages", "One of three messages");
          sendMessage("all-messages", "Two of three messages");
          sendMessage("all-messages", "Three of three messages");
          break;
      }
    });

    ws.send("Opened from the server");
  });
};

module.exports = startWebsocketServer;
