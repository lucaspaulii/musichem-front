import useAsync from './useAsync';

import * as authServices from '../services/userServices';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(authServices.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}