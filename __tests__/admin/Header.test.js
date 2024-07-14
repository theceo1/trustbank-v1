// src/components/ui/__tests__/Header.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Header from '../Header';

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
useRouter.mockImplementation(() => ({
  push: mockPush,
}));

const MockHeader = ({ isAuthenticated }) => (
  <AuthProvider value={{ user: isAuthenticated ? { email: 'test@test.com' } : null, logout: jest.fn() }}>
    <Header />
  </AuthProvider>
);

describe('Header', () => {
  it('should display signin/signup buttons when not authenticated', () => {
    render(<MockHeader isAuthenticated={false} />);

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it('should display logout button when authenticated', () => {
    render(<MockHeader isAuthenticated={true} />);

    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('should navigate to homepage on logout', () => {
    render(<MockHeader isAuthenticated={true} />);

    fireEvent.click(screen.getByText(/logout/i));
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
