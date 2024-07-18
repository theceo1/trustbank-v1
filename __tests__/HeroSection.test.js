// src/components/ui/HeroSection.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/ui/HeroSection';

test('renders HeroSection with text and button', () => {
  render(<HeroSection />);
  expect(screen.getByText(/trustBank/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();
});