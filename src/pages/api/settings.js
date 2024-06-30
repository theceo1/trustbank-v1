// src/pages/api/settings.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Settings fetched successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  