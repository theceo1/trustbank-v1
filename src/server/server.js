// src/server/server.js

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

let marketData = [
  { symbol: "BTC", name: "Bitcoin", price: "56789.00", change: "2.5", marketCap: "1.2T" },
  { symbol: "ETH", name: "Ethereum", price: "1789.00", change: "-1.2", marketCap: "210B" },
  { symbol: "USDT", name: "Tether", price: "1.00", change: "0.1", marketCap: "55B" }
];

io.on('connection', (socket) => {
  console.log('a user connected');
  
  // Emit initial data
  socket.emit('message', JSON.stringify(marketData));

  // Example of sending updates every 5 seconds
  const interval = setInterval(() => {
    // Simulate data update
    marketData = marketData.map(data => ({
      ...data,
      price: (parseFloat(data.price) + (Math.random() - 0.5) * 100).toFixed(2),
      change: (Math.random() * 5 - 2.5).toFixed(2)
    }));

    socket.emit('message', JSON.stringify(marketData));
  }, 5000);

  socket.on('disconnect', () => {
    console.log('user disconnected');
    clearInterval(interval);
  });
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
