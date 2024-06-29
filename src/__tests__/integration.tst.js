// src/__tests__/integration.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../pages/_app';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

test('navigates from dashboard to profile', () => {
  render(<App Component={Dashboard} pageProps={{}} />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Profile'));
  render(<App Component={Profile} pageProps={{}} />);
  expect(screen.getByText('Profile Page')).toBeInTheDocument();
});
