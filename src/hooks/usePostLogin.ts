import { useMutation } from "@tanstack/react-query";
import {
  postLogin,
  PostLoginParams,
  PostLoginResponse,
} from "../api/postLogin.ts";
import { api } from "../service/TokenService.ts";

interface UsePostLoginParams {
  then?: (data: PostLoginResponse) => void;
}

export const usePostLogin = ({ then }: UsePostLoginParams) => {
  return useMutation({
    mutationFn: (params: PostLoginParams) => postLogin(params),
    onSuccess: (data, variables) => {
      api.setAccessToken(data.accessToken);
      api.setRefreshToken(data.refreshToken);
      api.setUserId(data.id);
      api.setPassword(variables.password);
      then?.(data);
    },
  });
};
