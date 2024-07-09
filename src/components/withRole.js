import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withRole = (Component, requiredRole) => {
  const WrappedComponent = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/signin');
      } else if (user.role !== requiredRole) {
        router.push('/not-authorized');
      }
    }, [user, router]);

    if (!user || user.role !== requiredRole) {
      return null;
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withRole(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export default withRole;
