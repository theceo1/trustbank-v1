// src/components/ui/HeroSection.js
import React from 'react';
import Button from '@/components/ui/Button';

const HeroSection = () => (
  <div className="hero bg-[#090f2d] text-white py-16 px-4">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mt-0">trustBank</h1>
      <p className="text-sm mb-2">TRADE | SPEND | <span className='text-teal-500'>EARN</span></p>
      <Button variant="solid" className="bg-teal text-teal-500 hover:bg-gray-100">Get Started</Button>
    </div>
  </div>
);

export default HeroSection;