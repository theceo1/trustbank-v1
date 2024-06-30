// src/pages/index.js

import Head from 'next/head';
import HeroSection from '@/components/ui/HeroSection';
import FeaturesSection from '@/components/ui/FeaturesSection';
import CallToAction from '@/components/ui/CallToAction';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trustbank</title>
        <meta name="description" content="Cryptocurrency Exchange Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </div>
  );
}
