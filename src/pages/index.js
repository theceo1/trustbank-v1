import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import FeaturesSection from '@/components/ui/FeaturesSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import CallToAction from '@/components/ui/CallToAction';

export default function Home() {
  return (
    <div>
      <Head>
        <title>trustbank</title>
        <meta name="description" content="Cryptocurrency Exchange Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
