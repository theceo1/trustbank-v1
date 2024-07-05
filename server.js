// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/proxy', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error in proxy server:', error.message);
    res.status(500).send('Error in proxy server.');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
