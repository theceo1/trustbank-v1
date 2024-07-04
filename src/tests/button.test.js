// src/tests/button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="outline">Click me</Button>);
    expect(container.firstChild).toHaveClass('py-2 px-4 rounded focus:outline-none text-base border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white');
  });
});
