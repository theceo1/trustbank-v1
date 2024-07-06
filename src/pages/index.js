// src/pages/index.js
import React from 'react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '@/components/LogoutButton';

const HeroSection = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="hero bg-[#090f2d] text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mt-0">trustBank</h1>
        <p className="text-sm mb-2">TRADE | SPEND | <span className="text-teal-500">EARN</span></p>
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()} className="bg-teal-500 text-white px-4 py-2 rounded">
            Get Started
          </button>
        ) : (
          <LogoutButton />
        )}
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <div className="features py-16 px-4 bg-[#090f2d]">
    <div className="container mx-auto text-center">
      <h2 className="text-white text-3xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <Card className="bg-[#1e9eac]">
          <CardHeader>
            <CardTitle>Secure Trading</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Experience top-notch security for all your transactions.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac]">
          <CardHeader>
            <CardTitle>Real-Time Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get real-time market data and stay ahead in the game.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac]">
          <CardHeader>
            <CardTitle>User-Friendly Interface</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enjoy a seamless and intuitive trading experience.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac]">
          <CardHeader>
            <CardTitle>trustCard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Borderless Payments. Earn cashback when you transact with trustCard.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac]">
          <CardHeader>
            <CardTitle>trustCoin</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tired of market volatility? Look no further! trustCoin is a revolutionary stable coin pegged to the value of gold. A safe and reliable store of value.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-white py-8 px-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} trustBank. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="/about" legacyBehavior><a className="text-teal-500 hover:text-white">About</a></Link>
        <Link href="/contact" legacyBehavior><a className="text-teal-500 hover:text-white">Contact</a></Link>
        <Link href="/faq" legacyBehavior><a className="text-teal-500 hover:text-white">FAQ</a></Link>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Join our Waiting List</h3>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 text-black rounded-l-md focus:outline-none"
          />
          <Button variant="solid" className="bg-teal-500 text-white hover:bg-teal-600 rounded-r-md">Subscribe</Button>
        </form>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <Footer />
  </>
);

export default HomePage;
