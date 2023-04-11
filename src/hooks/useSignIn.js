
import useAsync from './useAsync';

import * as authServices from '../services/authServices';

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(authServices.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}