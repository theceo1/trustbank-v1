import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '@/pages/admin/signup';
import { AuthProvider } from '@/context/AuthContext';

const renderWithAuthProvider = (ui, { providerProps, ...renderOptions } = {}) => {
  return render(<AuthProvider {...providerProps}>{ui}</AuthProvider>, renderOptions);
};

describe('SignUp', () => {
  it('renders SignUp component', () => {
    const { asFragment } = renderWithAuthProvider(<SignUp />, {
      providerProps: { value: { user: null } },
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
