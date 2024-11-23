import {customAxios} from "./index.ts";

interface GetCheckEmailParams {
    email: string;
}

interface CheckEmailResponse {
    validated: boolean;
}

export const getCheckEmail = async (params: GetCheckEmailParams) => {
    const {data} = await customAxios.get<CheckEmailResponse>('/check-email', {params});
    return data;
}