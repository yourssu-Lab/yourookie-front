import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import {
  postOrganization,
  PostOrganizationParams,
} from "../api/postOrganization.ts";
import { api } from "../service/TokenService";

export const usePostOrganization = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: PostOrganizationParams) => postOrganization(params),
    onSuccess: (_, variables) => {
      api.setOrganizationPassword(variables.reservationPassword);
      navigate({ to: "/" });
    },
  });
};
