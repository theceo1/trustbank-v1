// src/pages/index.js
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Footer from '@/components/ui/Footer';
import FeaturesSection from '@/components/ui/FeaturesSection'; 


const HeroSection = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleGetStarted = () => {
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/signin');
    }
  };

  return (
    <div className="hero bg-[#090f2d] text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mt-0">trustBank</h1>
        <p className="text-sm mb-2">TRADE | SPEND | <span className="text-teal-500">EARN</span></p>
        <Button onClick={handleGetStarted} variant="solid" className="bg-teal-500 text-white hover:bg-teal-600">Get Started</Button>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center my-8">
        <Image
          src="/path/to/your/crypto-image.jpg" // Replace with your image path
          alt="Cryptocurrency Trading"
          width={800}
          height={400}
        />
      </div>
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default HomePage;
