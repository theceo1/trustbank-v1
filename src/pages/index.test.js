// src/pages/index.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';

test('renders Home page sections', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to TrustBank/i)).toBeInTheDocument();
  expect(screen.getByText(/Features/i)).toBeInTheDocument();
  expect(screen.getByText(/What Our Users Say/i)).toBeInTheDocument();
  expect(screen.getByText(/Ready to start trading?/i)).toBeInTheDocument();
});
