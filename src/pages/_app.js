// src/pages/_app.js

import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { NotificationProvider } from '@/context/NotificationContext';
import Header from '@/components/ui/Header';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
          <Header />
          <Component {...pageProps} />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default MyApp;
