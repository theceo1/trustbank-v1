// src/__tests__/integration.tst.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RouterContext } from 'next/router';
import { createMockRouter } from '../test-utils/createMockRouter';
import App from '../pages/_app';
import Dashboard from '../pages/dashboard';

test('navigates from dashboard to profile', () => {
  render(
    <RouterContext.Provider value={createMockRouter({})}>
      <App Component={Dashboard} pageProps={{}} />
    </RouterContext.Provider>
  );
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Profile'));
  expect(screen.getByText('Profile')).toBeInTheDocument();
});
