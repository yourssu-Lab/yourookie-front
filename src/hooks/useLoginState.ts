import { api } from '../service/TokenService';

export const useLoginState = () => {
  return { isLoggedIn: api.getAccessToken() !== undefined };
};
