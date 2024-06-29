export default function handler(req, res) {
    const profileData = {
      username: 'john_doe',
      email: 'john.doe@example.com',
      balance: '$50,000.00',
      transactions: [
        { date: '2023-06-01', type: 'Buy', amount: '0.5 BTC', status: 'Completed' },
        { date: '2023-06-02', type: 'Sell', amount: '1 ETH', status: 'Pending' },
      ]
    };
  
    res.status(200).json(profileData);
  }
  