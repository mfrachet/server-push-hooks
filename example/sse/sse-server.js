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

module.exports = sseRequestHandler;
