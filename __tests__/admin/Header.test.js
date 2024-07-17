import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/ui/Header';
import { AuthProvider } from '@/context/AuthContext';
import { useRouter } from 'next/router';

jest.mock('@/context/AuthContext', () => ({
  AuthProvider: ({ children }) => <div>{children}</div>,
  useAuth: () => ({ user: { name: 'Test User' }, logout: jest.fn() }),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      pathname: '/',
      push: jest.fn(),
    });
  });

  it('should display logout button when authenticated', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('should navigate to homepage on logout', () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({
      pathname: '/',
      push: mockPush,
    });

    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/logout/i));
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
