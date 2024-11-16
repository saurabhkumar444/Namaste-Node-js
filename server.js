const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/secret") res.end("This is a secret message!");
  else res.end("hello world!");
});

server.listen(9001);
