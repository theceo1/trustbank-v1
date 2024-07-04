// server.js

const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/api/market-data', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/market-data`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
