import {customAxios} from "./index.ts";

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
    console.log(image);
    const formData = new FormData();
    const request = new Blob([JSON.stringify({email, name, password, reservationPassword, hashtags, description})], {
        type: 'application/json',
    });
    formData.append('request', request);
    if (image) formData.set("image", image);
    await customAxios.post('/organizations', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}