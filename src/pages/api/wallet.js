import { sendCrypto } from '../../services/walletService';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const handler = async (req, res) => {
  const session = getSession(req, res);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const userId = session.user.sub;

  if (req.method === 'POST') {
    const { address, amount } = req.body;
    try {
      const result = await sendCrypto(userId, address, amount);
      res.status(200).json({ message: 'Transaction successful', result });
    } catch (error) {
      res.status(500).json({ message: 'Transaction failed', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(handler);
