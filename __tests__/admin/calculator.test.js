// __tests__/calculator.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../pages/calculator';

describe('Calculator', () => {
  test('renders calculator page', () => {
    render(<Calculator />);
    expect(screen.getByText('RATE CALCULATOR')).toBeInTheDocument();
  });

  test('selects currency and performs conversion', async () => {
    render(<Calculator />);
    
    fireEvent.click(screen.getByText('BTC'));
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '100' } });
    
    expect(screen.getByPlaceholderText('5000').value).toBe('100');
    
    fireEvent.click(screen.getByText('Execute SELL'));
    
    expect(await screen.findByText(/NGN/)).toBeInTheDocument();
  });
});
