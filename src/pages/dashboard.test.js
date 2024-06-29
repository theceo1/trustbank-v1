// src/pages/dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

test('renders Dashboard page', () => {
  render(<Dashboard />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Account Balance')).toBeInTheDocument();
  expect(screen.getByText('Trade')).toBeInTheDocument();
  expect(screen.getByText('Market Prices')).toBeInTheDocument();
  expect(screen.getByText('Recent Transactions')).toBeInTheDocument();
});
