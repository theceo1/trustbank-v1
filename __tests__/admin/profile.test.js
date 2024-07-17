import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from '@/pages/profile';
import { AuthProvider } from '@/context/AuthContext';

jest.mock('@/context/AuthContext', () => ({
  AuthProvider: ({ children }) => <div>{children}</div>,
  useAuth: () => ({ user: null, loading: true }), // Adjust according to your logic
}));

describe('UserProfile', () => {
  it('displays loading message when user data is being fetched', () => {
    render(<UserProfile />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it('displays log in message when user is not authenticated', () => {
    render(<UserProfile />);
    expect(screen.getByText(/Please log in to view your profile/)).toBeInTheDocument();
  });
});
