// src/components/ui/WalletDashboard.js
import React, { useState } from 'react';
import SendForm from '@/components/ui/SendForm';
import ReceiveForm from '@/components/ui/ReceiveForm';
import WithdrawForm from '@/components/ui/WithdrawForm';
import SwapForm from '@/components/ui/SwapForm';

const WalletDashboard = () => {
  const [activeForm, setActiveForm] = useState('send');

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => setActiveForm('send')} className="bg-teal-500 text-white p-2 rounded">Send</button>
        <button onClick={() => setActiveForm('receive')} className="bg-teal-500 text-white p-2 rounded">Receive</button>
        <button onClick={() => setActiveForm('withdraw')} className="bg-teal-500 text-white p-2 rounded">Withdraw</button>
        <button onClick={() => setActiveForm('swap')} className="bg-teal-500 text-white p-2 rounded">Swap</button>
      </div>
      <div>
        {activeForm === 'send' && <SendForm />}
        {activeForm === 'receive' && <ReceiveForm />}
        {activeForm === 'withdraw' && <WithdrawForm />}
        {activeForm === 'swap' && <SwapForm />}
      </div>
    </div>
  );
};

export default WalletDashboard;
