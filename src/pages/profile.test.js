import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import UserProfile from './profile';

jest.mock('@auth0/auth0-react');

describe('UserProfile', () => {
  const user = {
    nickname: 'testuser',
    email: 'testuser@example.com',
    picture: 'https://example.com/profile.jpg',
    updated_at: '2023-07-01T00:00:00.000Z'
  };

  beforeEach(() => {
    useAuth0.mockReturnValue({
      user,
      isAuthenticated: true,
      isLoading: false
    });
  });

  test('renders profile with user data', () => {
    render(<UserProfile />);
    expect(screen.getByLabelText(/Username/).value).toBe('testuser');
    expect(screen.getByLabelText(/Email/).value).toBe('testuser@example.com');
    expect(screen.getByAltText(/Profile/)).toBeInTheDocument();
  });

  test('allows editing of user profile', async () => {
    render(<UserProfile />);
    fireEvent.click(screen.getByText(/Edit Profile/));
    fireEvent.change(screen.getByLabelText(/Username/), { target: { value: 'newusername' } });
    fireEvent.click(screen.getByText(/Update Profile/));

    await waitFor(() => {
      expect(screen.getByLabelText(/Username/).value).toBe('newusername');
    });
  });

  test('displays loading when fetching user data', () => {
    useAuth0.mockReturnValue({
      user: null,
      isAuthenticated: true,
      isLoading: true
    });
    render(<UserProfile />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  test('displays log in message when user is not authenticated', () => {
    useAuth0.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
    render(<UserProfile />);
    expect(screen.getByText(/Please log in to view your profile/)).toBeInTheDocument();
  });
});
