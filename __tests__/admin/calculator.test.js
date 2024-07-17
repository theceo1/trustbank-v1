import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '@/pages/calculator';

describe('Calculator', () => {
  test('renders calculator page', () => {
    render(<Calculator />);
    expect(screen.getByText('RATE CALCULATOR')).toBeInTheDocument();
  });

  test('selects currency and performs conversion', async () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('BTC'));
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '100' } });
  });
});
