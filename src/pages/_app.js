import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { NotificationProvider } from '@/context/NotificationContext';
import Header from '@/components/ui/Header';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <UserProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
            <Header />
            <Component {...pageProps} />
          </div>
        </UserProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default MyApp;
