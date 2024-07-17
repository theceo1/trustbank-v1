import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/test-utils/createMockRouter';
import App from '@/pages/_app';
import Dashboard from '@/pages/dashboard';

describe('Integration Test', () => {
  it('should render the Dashboard', () => {
    const router = createMockRouter({ pathname: '/dashboard' });

    render(
      <RouterContext.Provider value={router}>
        <App Component={Dashboard} pageProps={{}} />
      </RouterContext.Provider>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
