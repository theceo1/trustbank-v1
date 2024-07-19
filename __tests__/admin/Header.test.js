// __tests__/admin/Header.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  it('should navigate to homepage on logout', () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({
      push: mockPush,
    });

    const { getByText } = render(<Header />);
    fireEvent.click(getByText(/logout/i));
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
