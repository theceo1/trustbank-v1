// src/pages/dashboard.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from '@/pages/dashboard';
import { AuthProvider } from '@/context/AuthContext';

jest.mock('@/context/AuthContext', () => ({
  AuthProvider: ({ children }) => <div>{children}</div>,
  useAuth: () => ({user: { name: 'Test User' } })
  }));



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
