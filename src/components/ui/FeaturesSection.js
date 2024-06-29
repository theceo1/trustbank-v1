import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-2xl font-bold mb-4">Secure</h3>
            <p>Our platform uses state-of-the-art security measures to protect your assets.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-2xl font-bold mb-4">Fast</h3>
            <p>Execute trades in milliseconds with our high-performance engine.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-2xl font-bold mb-4">Reliable</h3>
            <p>Our exchange is built to handle high volumes of traffic without downtime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
