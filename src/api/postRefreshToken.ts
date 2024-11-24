import {customAxios} from "./index";
import {api} from "../service/TokenService";

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