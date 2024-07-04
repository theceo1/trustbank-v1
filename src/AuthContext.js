import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/router';
import { createMockRouter } from '../test-utils/createMockRouter';
import AuthProvider from '@/context/AuthContext';

test('renders AuthProvider', () => {
  render(
    <RouterContext.Provider value={createMockRouter({})}>
      <AuthProvider>
        <div>Test</div>
      </AuthProvider>
    </RouterContext.Provider>
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});
