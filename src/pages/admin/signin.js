import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const SignIn = () => {
  const { signin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // your logic
  }, [router]);

  return <div>Sign In</div>;
};

SignIn.displayName = 'SignIn';

export default SignIn;
