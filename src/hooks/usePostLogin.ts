import { useMutation } from "@tanstack/react-query";
import { postLogin, PostLoginParams } from "../api/postLogin.ts";
import { api } from "../service/TokenService.ts";

interface UsePostLoginParams {
  then?: () => void;
}

export const usePostLogin = ({ then }: UsePostLoginParams) => {
  return useMutation({
    mutationFn: (params: PostLoginParams) => postLogin(params),
    onSuccess: (data) => {
      api.setAccessToken(data.accessToken);
      api.setRefreshToken(data.refreshToken);
      api.setUserId(data.id);
      then?.();
    },
  });
};
