// src/components/ui/HeroSection.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './HeroSection';

test('renders HeroSection with text and button', () => {
  render(<HeroSection />);
  expect(screen.getByText(/Welcome to TrustBank/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();
});
