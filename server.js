const http = require("http");
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Servidor express rodando");
});

http
  .createServer(app)
  .listen(3333, () => console.log("Servidor rodando local na porta 3000"));
