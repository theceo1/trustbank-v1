import React from 'react';
import { render } from '@testing-library/react';
import Profile from '@/pages/profile';
import { AuthProvider } from '@/context/AuthContext';

const renderWithAuthProvider = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <AuthProvider {...providerProps}>{ui}</AuthProvider>,
    renderOptions
  );
};

test('renders Profile component', () => {
  const { asFragment } = renderWithAuthProvider(<Profile />, {
    providerProps: { value: { user: { name: 'Test User' } } },
  });
  expect(asFragment()).toMatchSnapshot();
});
