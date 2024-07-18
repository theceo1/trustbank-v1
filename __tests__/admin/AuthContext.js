import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/test-utils/createMockRouter';
import AuthProvider from '@/context/AuthContext';

describe('AuthContext', () => {
  it('should render children with AuthProvider', () => {
    const router = createMockRouter({ pathname: '/' });

    render(
      <RouterContext.Provider value={router}>
        <AuthProvider>
          <div>Test Content</div>
        </AuthProvider>
      </RouterContext.Provider>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
