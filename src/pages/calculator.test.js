// src/pages/calculator.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Calculator from '@/pages/calculator';

test('should render the calculator component', () => {
  render(<Calculator />);
  expect(screen.getByText(/rate calculator/i)).toBeInTheDocument();
});

test('should update currency when a currency button is clicked', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText(/eth/i));
  expect(screen.getByText(/eth/i).classList.contains('text-teal-500')).toBe(true);
});

test('should switch currency and recalculate correctly', async () => {
  render(<Calculator />);
  const ethButton = screen.getAllByText(/eth/i).find(el => el.tagName === 'BUTTON');
  fireEvent.click(ethButton);
  fireEvent.change(screen.getByPlaceholderText('5000'), { target: { value: '5000' } });
  await waitFor(() => expect(screen.getByText(/ngn/i)).toBeInTheDocument());
  expect(screen.getByText(/1 usd =/i)).toHaveTextContent('1 USD = 670000');
});

