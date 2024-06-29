const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 3000;

let orderBook = [
  { price: 50000, amount: 0.5, total: 25000 },
  { price: 51000, amount: 1, total: 51000 },
];

let tradeHistory = [
  { date: '2023-06-01', type: 'buy', crypto: 'BTC', amount: 0.5, price: 50000, status: 'completed' },
  { date: '2023-06-02', type: 'sell', crypto: 'ETH', amount: 1, price: 1800, status: 'pending' },
];

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.emit('orderBook', orderBook);
  socket.emit('tradeHistory', tradeHistory);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
