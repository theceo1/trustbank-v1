import React from 'react';
import { render } from '@testing-library/react';
import Signup from '../../src/pages/admin/signup';
import { AuthProvider } from '@/context/AuthContext';

const renderWithAuthProvider = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <AuthProvider {...providerProps}>{ui}</AuthProvider>,
    renderOptions
  );
};

test('renders Signup component', () => {
  const { asFragment } = renderWithAuthProvider(<Signup />, {
    providerProps: { value: { user: null } },
  });
  expect(asFragment()).toMatchSnapshot();
});
