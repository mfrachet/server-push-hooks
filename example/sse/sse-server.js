const sseRequestHandler = (req, res) => {
  res.set("Content-Type", "text/event-stream");

  const data = { hello: "world" };

  res.write(`data: ${JSON.stringify(data)}`);
  res.write("\n\n");
};

module.exports = sseRequestHandler;
