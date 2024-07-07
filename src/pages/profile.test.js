import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import UserProfile from './profile';

jest.mock('@auth0/auth0-react');
jest.mock('axios');

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

    axios.get.mockResolvedValue({
      data: {
        username: 'testuser',
        email: 'testuser@example.com',
        profilePicture: 'https://example.com/profile.jpg',
        twoFactorAuth: false,
        accountCreationDate: '2023-07-01T00:00:00.000Z',
        balance: 1000
      }
    });

    axios.put.mockResolvedValue({
      data: {
        username: 'newusername',
        email: 'newemail@example.com',
        profilePicture: 'https://example.com/newprofile.jpg',
        twoFactorAuth: true,
        accountCreationDate: '2023-07-01T00:00:00.000Z',
        balance: 1000
      }
    });
  });

  test('renders profile with user data', async () => {
    render(<UserProfile />);
    await waitFor(() => {
      expect(screen.getByLabelText(/Username/).value).toBe('testuser');
      expect(screen.getByLabelText(/Email/).value).toBe('testuser@example.com');
      expect(screen.getByAltText(/Profile/)).toBeInTheDocument();
    });
  });

  test('allows editing of user profile', async () => {
    render(<UserProfile />);
    await waitFor(() => fireEvent.click(screen.getByText(/Edit Profile/)));
    fireEvent.change(screen.getByLabelText(/Username/), { target: { value: 'newusername' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'newemail@example.com' } });
    fireEvent.click(screen.getByText(/Update Profile/));

    await waitFor(() => {
      expect(screen.getByLabelText(/Username/).value).toBe('newusername');
      expect(screen.getByLabelText(/Email/).value).toBe('newemail@example.com');
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
