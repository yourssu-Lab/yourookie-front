import {customAxios} from "./index.ts";

export interface PostOrganizationParams {
    email: string;
    password: string;
    name: string;
    description: string;
    reservationPassword: string;
    hashtags: string[];
    image: File;

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
    formData.set("image", image);
    await customAxios.post('/organizations', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}