import axios, { AxiosError, AxiosResponse } from "axios";

import { api } from "../service/TokenService";
import { postRefreshToken } from "./postRefreshToken";
import { ErrorData } from "./type";

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.request.use((config) => {
  // 특정 요청에 skipAuth 설정이 있다면 Authorization 제거해서 요청 보냄!
  if (config.headers && !config.headers.skipAuth && api.getAccessToken()) {
    config.headers.Authorization = `${api.getAccessToken()}`;
  } else if (config.headers?.skipAuth) {
    delete config.headers.Authorization;
  }
  return config;
});

customAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ErrorData>) => {
    const originalConfig = error.config;

    if (
      originalConfig &&
      error.response?.status === 401 &&
      error.response?.data.refreshRequired
    ) {
      try {
        const { accessToken, refreshToken } = await postRefreshToken();

        api.setAccessToken(accessToken);
        api.setRefreshToken(refreshToken);

        return customAxios.request({
          ...originalConfig,
        });
      } catch (error) {
        api.logout();
        window.location.reload();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
