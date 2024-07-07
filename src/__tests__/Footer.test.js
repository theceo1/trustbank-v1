// src/components/ui/__tests__/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('should render footer with necessary links and waiting list form', () => {
    render(<Footer />);

    // Check for links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/faq/i)).toBeInTheDocument();

    // Check for waiting list form
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
    expect(screen.getByText(/subscribe/i)).toBeInTheDocument();

    // Check for copyright text
    expect(screen.getByText(/© 2024 trustbank. all rights reserved./i)).toBeInTheDocument();
  });
});
