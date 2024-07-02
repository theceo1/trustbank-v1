// server.js

const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/proxy', (req, res) => {
  const apiUrl = req.query.url;
  request(apiUrl).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
