// src/pages/_app.js
import React from 'react';
import '../styles/globals.css';
import Auth0ProviderWithHistory from '../auth0-provider-with-history';
import { NotificationProvider } from '@/context/NotificationContext';
import Header from '@/components/ui/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0ProviderWithHistory>
      <NotificationProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
          <Header />
          <Component {...pageProps} />
        </div>
      </NotificationProvider>
    </Auth0ProviderWithHistory>
  );
}

export default MyApp;
