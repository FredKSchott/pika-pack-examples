import express from 'express';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Hello, Lambda!</h1>');
});

if (dev) {
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}

export default server;
