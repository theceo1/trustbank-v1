// src/pages/index.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

test('renders Home page sections', () => {
  render(<Home />);
  expect(screen.getAllByText(/trustBank/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Features/i)).toBeInTheDocument();
});
