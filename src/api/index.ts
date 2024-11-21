import axios from 'axios';

import {api} from "../service/TokenService.ts";

export const customAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

customAxios.interceptors.request.use((config) => {
    if (config.headers && api.getAccessToken()) {
        config.headers.Authorization = `Bearer ${api.getAccessToken()}`;
    }
    return config;
});

// soomsilClient.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     async (error: AxiosError) => {
//         const originalConfig = error.config;
//         const data = error.response?.data as AuthErrorData;
//
//         if (originalConfig && error.response?.status === 401 && data?.error === 'Auth-002') {
//             try {
//                 const { accessToken, accessTokenExpiredIn, refreshToken, refreshTokenExpiredIn } =
//                     await postRefreshToken();
//
//                 api.setAccessToken(accessToken, accessTokenExpiredIn);
//                 api.setRefreshToken(refreshToken, refreshTokenExpiredIn);
//
//                 return soomsilClient.request({
//                     ...originalConfig,
//                 });
//             } catch (error) {
//                 api.logout();
//                 sessionStorage.removeItem('user');
//                 window.location.reload();
//                 return Promise.reject(error);
//             }
//         }
//         return Promise.reject(error);
//     }
// );
