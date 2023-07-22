import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp
  } = useAsync(({ username, email, password }: { username: string, email: string, password: string }) => authApi.signUp({ username, email, password }), false);

  return {
    signUpLoading,
    signUpError,
    signUp
  };
}