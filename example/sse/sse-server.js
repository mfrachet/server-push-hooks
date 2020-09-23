const createHttpServer = require("../server-helpers");

const sseRequestHandler = (req, res) => {
  res.set("Content-Type", "text/event-stream");

  const firstData = { name: "Marvin" };

  res.write(`data: ${JSON.stringify(firstData)}`);
  res.write("\n\n");

  setTimeout(() => {
    const secondData = { name: "Laetitia" };

    res.write(`data: ${JSON.stringify(secondData)}`);
    res.write("\n\n");
  }, 500);
};

const startSSEServer = () => {
  const { server: sseServer, app: appSSE } = createHttpServer();

  appSSE.get("/last-sse", sseRequestHandler);
  appSSE.get("/all-sse", sseRequestHandler);

  sseServer.listen(3123, () => {
    console.log(`[SSE] Started on port 3123`);
  });
};

module.exports = startSSEServer;
