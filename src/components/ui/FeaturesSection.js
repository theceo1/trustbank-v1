// src/components/ui/FeaturesSection.js
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const FeaturesSection = () => (
  <div className="features py-16 px-4 bg-blue-100">
    <div className="container mx-auto text-center">
      <h2 className="text-white text-3xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <Card className="bg-[#1e9eac] hover:bg-teal-500">
          <CardHeader>
            <CardTitle>Secure Trading</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Experience top-notch security for all your transactions.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac] hover:bg-teal-500">
          <CardHeader>
            <CardTitle>Real-Time Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get real-time market data and stay ahead in the game.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac] hover:bg-teal-500">
          <CardHeader>
            <CardTitle>User-Friendly Interface</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enjoy a seamless and intuitive trading experience.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac] hover:bg-teal-500">
          <CardHeader>
            <CardTitle>trustCard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Boarderless Payments. Earn cashback when you transact with trustCard</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1e9eac] hover:bg-teal-500">
          <CardHeader>
            <CardTitle>trustCoin</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tired of the market volatility? Look no further! trustCoin is a revolutionary stable coin pegged to the value of gold. Safe and reliable store of value..</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
