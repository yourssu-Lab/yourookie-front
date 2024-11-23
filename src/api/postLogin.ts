import {customAxios} from "./index.ts";

export interface PostLoginParams {
    email: string;
    password: string;
}

interface PostLoginResponse {
    accessToken: string;
    refreshToken: string;
}

export const postLogin = async (params: PostLoginParams) => {
    const {data} = await customAxios.post<PostLoginResponse>('/login', params);
    return data;
}