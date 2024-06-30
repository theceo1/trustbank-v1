// src/components/OverviewSection.js
import React from 'react';

const OverviewSection = () => {
    return (
        <section className="overview-section py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-card p-6 bg-white shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Secure Trading</h3>
                        <p>Our platform provides top-notch security to ensure your assets are safe.</p>
                    </div>
                    <div className="feature-card p-6 bg-white shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Real-Time Data</h3>
                        <p>Access real-time market data and make informed trading decisions.</p>
                    </div>
                    <div className="feature-card p-6 bg-white shadow-md">
                        <h3 className="text-2xl font-bold mb-4">User-Friendly Interface</h3>
                        <p>Our interface is designed to be intuitive and easy to use for all traders.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
