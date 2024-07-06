// src/auth0-provider-with-history.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import authConfig from './auth_config.json';

const Auth0ProviderWithHistory = ({ children }) => {
  const router = useRouter();

  const onRedirectCallback = (appState) => {
    router.push(appState?.returnTo || '/dashboard'); // Redirect to dashboard after login
  };

  const getRedirectUri = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'http://localhost:3000'; // Default to localhost for SSR
  };

  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{ redirect_uri: getRedirectUri() }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
