import React from 'react';
import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { NotificationProvider } from '@/context/NotificationContext';
import Header from '@/components/ui/Header';
import Auth0ProviderWithHistory from '@/auth0-provider-with-history';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Auth0ProviderWithHistory>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
            <Header />
            <Component {...pageProps} />
          </div>
        </Auth0ProviderWithHistory>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default MyApp;
