// src/utils/socket.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your server URL

export default socket;

// server.js (or wherever your server setup is)

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fetch = require('node-fetch');

const app = express();
const server = http.createServer(app);

const getLiveMarketData = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching live market data:', error);
    return [];
  }
};

io.on('connection', (socket) => {
  console.log('New client connected');

  setInterval(async () => {
    const data = await getLiveMarketData();
    socket.emit('marketData', data);
  }, 5000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
