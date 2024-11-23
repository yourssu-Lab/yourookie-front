import axios, { AxiosError, AxiosResponse } from "axios";

import { api } from "../service/TokenService.ts";
import { postRefreshToken } from "./postRefreshToken.ts";
import { ErrorData } from "./type.ts";

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.request.use((config) => {
  // 요청에서 skipAuth 헤더가 있으면 Authorization 헤더를 제거
  if (config.headers?.skipAuth) {
    delete config.headers.Authorization;
  } else if (config.headers && api.getAccessToken()) {
    config.headers.Authorization = `Bearer ${api.getAccessToken()}`;
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
