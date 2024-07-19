// src/pages/_app.js
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/store';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AuthProvider } from '@/context/AuthContext'; // Ensure this path is correct
import ErrorBoundary from '@/components/ui/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  console.log('MyApp Rendered');

  return (
    <Provider store={store}>
      <UserProvider>
        <AuthProvider>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </AuthProvider>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
