const sseRequestHandler = (req, res) => {
  res.set("Content-Type", "text/event-stream");

  const firstData = { name: "Marvin" };

  res.write(`data: ${JSON.stringify(firstData)}`);
  res.write("\n\n");
let count=0
  setInterval(() => {
    const secondData = { name: "Laetitia"+count };
count++
    res.write(`data: ${JSON.stringify(secondData)}`);
    res.write("\n\n");
  }, 2000);
};

module.exports = sseRequestHandler;
