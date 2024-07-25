// src/__tests__/signin.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '@/pages/signin';
import { AuthProvider } from '@/context/AuthContext';

describe('SignIn Page', () => {
  it('renders sign in form', () => {
    render(
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  it('shows error on invalid email', () => {
    render(
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByText(/sign in/i));

    expect(screen.getByText(/an unexpected error occurred/i)).toBeInTheDocument();
  });
});
