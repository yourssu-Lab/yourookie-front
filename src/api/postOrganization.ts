import {customAxios} from "./index.ts";

interface PostOrganizationResponse {
    id: number;
    name: string;
    accessToken: string;
    refreshToken: string;
}

export interface PostOrganizationParams {
    email: string;
    password: string;
    name: string;
    description: string;
    reservationPassword: string;
    hashtags: string[];
    image: File | null;
}

export const postOrganization = async (
    {
        email,
        password,
        name,
        description,
        reservationPassword,
        hashtags,
        image
    }: PostOrganizationParams) => {
    const formData = new FormData();
    const request = new Blob([JSON.stringify({email, name, password, reservationPassword, hashtags, description})], {
        type: 'application/json',
    });
    formData.append('request', request);
    if (image) formData.set("image", image);
    return await customAxios.post<PostOrganizationResponse>('/organizations', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}