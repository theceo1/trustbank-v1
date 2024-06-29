// src/components/Header.test.js

import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders the header component', () => {
    render(<Header />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
