// src/pages/calculator.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Calculator from './calculator';

jest.mock('axios');

describe('Calculator', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        btc: { usd: 60000, ngn: 1000000 },
        eth: { usd: 4000, ngn: 670000 },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the calculator component', () => {
    render(<Calculator />);
    expect(screen.getByText('RATE CALCULATOR')).toBeInTheDocument();
  });

  it('should display loading state when fetching exchange rates', async () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '5000' } });
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());
  });

  it('should display the calculated NGN value', async () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '5000' } });
    await waitFor(() => expect(screen.getByText(/NGN/)).toBeInTheDocument());
  });

  it('should display an error message when fetching exchange rates fails', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '5000' } });
    await waitFor(() => expect(screen.getByText('Error fetching exchange rate. Please try again later.')).toBeInTheDocument());
  });

  it('should update currency when a currency button is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('ETH'));
    expect(screen.getByText('ETH').classList.contains('text-teal-500')).toBe(true);
  });

  it('should update action when a select item is chosen', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'BUY' } });
    expect(screen.getByRole('combobox').value).toBe('BUY');
  });

  it('should update the button text based on the selected action', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'BUY' } });
    expect(screen.getByText('Execute BUY')).toBeInTheDocument();
  });

  it('should handle invalid amounts gracefully', async () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '-100' } });
    expect(screen.getByText('Please enter a valid positive number.')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/NGN/)).not.toBeInTheDocument());
  });

  it('should switch currency and recalculate correctly', async () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('ETH'));
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '5000' } });
    await waitFor(() => expect(screen.getByText(/NGN/)).toBeInTheDocument());
    expect(screen.getByText(/1 USD =/)).toHaveTextContent('1 USD = 670000');
  });

  it('should handle empty amount input gracefully', async () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '' } });
    await waitFor(() => expect(screen.queryByText(/NGN/)).not.toBeInTheDocument());
  });

  it('should display error message for non-numeric inputs', async () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: 'abc' } });
    expect(screen.getByText('Please enter a valid positive number.')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/NGN/)).not.toBeInTheDocument());
  });
});
