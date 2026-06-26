import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/auth';

export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      router.replace('/test-app/login');
    }
  }, [router]);

  if (!auth.isLoggedIn()) {
    return null;
  }

  return children;
}
