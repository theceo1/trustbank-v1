// src/components/ui/ProtectedRoute.js
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = (WrappedComponent) => {
  const ProtectedRouteComponent = (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/admin/signin');
      }
    }, [user, router]);

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedRouteComponent;
};

export default ProtectedRoute;
