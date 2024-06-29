// src/pages/dashboard.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

test('renders Dashboard page', () => {
  render(<Dashboard />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Account Balance')).toBeInTheDocument();
  // Use getAllByText since multiple elements contain 'Trade'
  expect(screen.getAllByText('Trade').length).toBeGreaterThan(0);
  expect(screen.getByText('Market Prices')).toBeInTheDocument();
  expect(screen.getByText('Recent Transactions')).toBeInTheDocument();
});
