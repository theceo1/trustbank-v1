import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '@/pages/dashboard';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe('Dashboard', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders dashboard with user name', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test('fetches and displays market data', async () => {
    render(<Dashboard />);
    // Add assertions related to fetched data
  });

  test('calculates crypto to fiat correctly', async () => {
    render(<Dashboard />);
    // Add assertions related to calculation
  });
});

