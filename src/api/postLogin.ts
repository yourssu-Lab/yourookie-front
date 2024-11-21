import {customAxios} from "./index.ts";

export interface PostLoginParams {
    email: string;
    password: string;
}

export const postLogin = async (params: PostLoginParams) => {
    return await customAxios.post('/login', params);
}