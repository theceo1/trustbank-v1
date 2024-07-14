// src/pages/dashboard.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from '../pages/dashboard';
import { AuthProvider } from '@/context/AuthContext';

// Mock the AuthProvider to provide a dummy user
const mockUser = { name: 'Test User' };
jest.mock('@/context/AuthContext', () => ({
  useAuth: () => ({
    user: mockUser,
  }),
}));

// Mock fetch to return sample market data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      bitcoin: { usd: 30000, ngn: 12000000, gbp: 22000 },
      ethereum: { usd: 2000, ngn: 800000, gbp: 1600 },
      tether: { usd: 1, ngn: 400, gbp: 0.8 },
    }),
  })
);

describe('Dashboard', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders dashboard with user name', () => {
    render(<Dashboard />);

    expect(screen.getByText(/Welcome, Test User/i)).toBeInTheDocument();
  });

  test('fetches and displays market data', async () => {
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText(/Bitcoin \(BTC\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Ethereum \(ETH\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Tether \(USDT\)/i)).toBeInTheDocument();
    });
  });

  test('calculates crypto to fiat correctly', async () => {
    render(<Dashboard />);

    fireEvent.change(screen.getByLabelText(/Amount/i), {
      target: { value: '1' },
    });
    fireEvent.click(screen.getByText(/Calculate/i));

    await waitFor(() => {
      expect(screen.getByText(/Converted 1 BTC to 30000 USD/i)).toBeInTheDocument();
    });
  });
});
