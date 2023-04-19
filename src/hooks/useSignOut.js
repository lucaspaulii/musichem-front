import { signOutService } from '@/services/authServices';
import useAsync from './useAsync';

export default function useSignOut() {
  const {
    loading: signOutLoading,
    error: signOutError,
    act: signOut,
  } = useAsync(signOutService, false);

  return {
    signOutLoading,
    signOutError,
    signOut,
  };
}