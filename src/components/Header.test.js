// src/components/Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

jest.mock('@/context/AuthContext', () => ({
  useAuth: () => ({ user: { name: 'Test User' }, logout: jest.fn() })
}));

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByText('Header Text')).toBeInTheDocument();
});
