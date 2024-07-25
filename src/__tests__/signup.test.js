// src/__tests__/signup.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '@/pages/signup';
import { AuthProvider } from '@/context/AuthContext';

describe('Signup Page', () => {
  it('renders sign up form', () => {
    render(
      <AuthProvider>
        <Signup />
      </AuthProvider>
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it('shows error on password mismatch', () => {
    render(
      <AuthProvider>
        <Signup />
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password124' } });
    fireEvent.click(screen.getByText(/sign up/i));

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });
});
