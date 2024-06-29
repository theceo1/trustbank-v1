import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-teal-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to TrustBank</h1>
        <p className="text-xl mb-8">Your Trusted Cryptocurrency Exchange Platform</p>
        <button className="bg-white text-teal-500 font-bold py-2 px-4 rounded hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
