import React from 'react';
import { render } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button', () => {
  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="outline">Click me</Button>);
    expect(container.firstChild).toHaveClass('py-2 px-4 rounded focus:outline-none text-base border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white');
  });
});
