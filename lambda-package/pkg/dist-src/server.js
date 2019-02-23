import express from 'express';
var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var server = express();
server.get('/', function (req, res) {
  res.send('<h1>Hello, Lambda!</h1>');
});

if (dev) {
  server.listen(port, function (err) {
    if (err) throw err;
    console.log("> Ready on http://localhost:".concat(port));
  });
}

export default server;