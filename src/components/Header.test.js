// src/components/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

jest.mock('@/context/AuthContext', () => ({
  useAuth: () => ({ user: { name: 'Test User' }, logout: jest.fn() })
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/dashboard'
  })
}));

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByText('trustBank')).toBeInTheDocument();
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Markets')).toBeInTheDocument();
  // Add other expectations as needed
});
