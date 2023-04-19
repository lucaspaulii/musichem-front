import useAsync from './useAsync';
import * as authServices from '../services/userServices';

export default function useSignOut() {
  const {
    loading: signOutLoading,
    error: signOutError,
    act: signOut,
  } = useAsync(authServices.signOut, false);

  return {
    signOutLoading,
    signOutError,
    signOut,
  };
}