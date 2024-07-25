// src/pages/_app.js

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from '@/context/AuthContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
    >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Auth0Provider>
  );
};

export default MyApp;
