import { tradeCrypto } from '../../services/walletService';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const handler = async (req, res) => {
  try {
    const session = await getSession(req, res); // Await the session to resolve
    console.log('Session:', session); // Log the session object for debugging

    if (!session) {
      console.log('No session found');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = session.user && session.user.sub;
    console.log('User ID:', userId); // Log the user ID

    if (!userId) {
      console.log('No userId found in session');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.method === 'POST') {
      const { selectedCrypto, amount, transactionType } = req.body;
      const result = await tradeCrypto(userId, selectedCrypto, amount, transactionType);
      res.status(200).json({ message: 'Trade successful', result });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Trade API Error:', error);
    res.status(500).json({ message: 'Trade failed', error: error.message });
  }
};

export default withApiAuthRequired(handler);
