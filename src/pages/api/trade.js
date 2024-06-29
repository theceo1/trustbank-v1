export default function handler(req, res) {
    if (req.method === 'POST') {
      const { crypto, amount } = req.body;
  
      // For the sake of this example, we'll just return a success message
      // In a real application, you would handle the trade logic here
      res.status(200).json({ message: `Trade executed for ${amount} of ${crypto}` });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  