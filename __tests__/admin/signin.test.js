import React from 'react';
import { render } from '@testing-library/react';
import Signin from '@/pages/signin';
import { AuthProvider } from '@/context/AuthContext';

const renderWithAuthProvider = (ui, { providerProps, ...renderOptions } = {}) => {
  return render(<AuthProvider {...providerProps}>{ui}</AuthProvider>, renderOptions);
};

describe('Signin', () => {
  it('renders Signin component', () => {
    const { asFragment } = renderWithAuthProvider(<Signin />, {
      providerProps: { value: { user: null } },
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
