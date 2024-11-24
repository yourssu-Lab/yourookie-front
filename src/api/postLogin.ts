import { customAxios } from "./index";

export interface PostLoginParams {
  email: string;
  password: string;
}

export interface PostLoginResponse {
  id: number;
  name: string;
  accessToken: string;
  refreshToken: string;
}

export const postLogin = async (params: PostLoginParams) => {
  const { data } = await customAxios.post<PostLoginResponse>("/login", params);
  return data;
};
