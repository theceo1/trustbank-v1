// src/components/ui/CallToAction.js

import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#090f2d] text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join a trustedCommunity Today</h2>
        <p className="text-xl mb-8">trust<span>Bank</span> innovation in web3 </p>
        <button className="bg-white text-teal-500 font-bold py-2 px-4 rounded hover:bg-gray-100">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
