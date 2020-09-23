const express = require("express");
const http = require("http");
const cors = require("cors");

const createHttpServer = () => {
  const app = express();
  const server = http.createServer(app);

  app.use(cors());

  return { server, app };
};

module.exports = createHttpServer;
