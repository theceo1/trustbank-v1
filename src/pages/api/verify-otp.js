// src/pages/api/verify-otp.js

export default async function handler(req, res) {
    const { otp } = req.body;
  
    try {
      // Verify the OTP (compare with stored OTP in session or database)
      const isValidOtp = true; // Replace this with actual verification logic
  
      if (isValidOtp) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, message: 'Invalid OTP' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'OTP verification failed' });
    }
  }
  