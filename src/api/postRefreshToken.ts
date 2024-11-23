import {customAxios} from "./index.ts";
import {api} from "../service/TokenService.ts";

interface PostRefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export const postRefreshToken = async () => {
    const { data } = await customAxios.post<PostRefreshTokenResponse>('/auth/refresh', {
        refreshToken: api.getRefreshToken(),
    });

    return data;
};