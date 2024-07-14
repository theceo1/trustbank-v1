// src/components/hoc/withAuth.js
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    if (!user) {
      if (typeof window !== 'undefined') {
        router.push('/signin');
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
