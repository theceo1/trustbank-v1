// __tests__/admin/profile.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { useAuth } from '@/context/AuthContext';
import UserProfile from '@/components/UserProfile';

jest.mock('@/context/AuthContext');

describe('UserProfile', () => {
  it('displays loading message when user data is being fetched', () => {
    useAuth.mockReturnValue({ loading: true, user: null });
    render(<UserProfile />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it('displays log in message when user is not authenticated', () => {
    useAuth.mockReturnValue({ loading: false, user: null });
    render(<UserProfile />);
    expect(screen.getByText(/Please log in to view your profile/)).toBeInTheDocument();
  });
});