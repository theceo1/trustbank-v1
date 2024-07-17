import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { useAuth } from '@/context/AuthContext';

jest.mock('@/context/AuthContext', () => ({
  useAuth: () => ({ user: null }), // Adjust according to your logic
}));

describe('Home Page', () => {
  it('renders Home page sections', () => {
    render(<Home />);
    expect(screen.getAllByText(/trustBank/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Features/i)).toBeInTheDocument();
  });
});
