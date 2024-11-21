import {useMutation} from "@tanstack/react-query";
import {postLogin, PostLoginParams} from "../api/postLogin.ts";

export const usePostLogin = () => {
    return useMutation({
        mutationFn: (params: PostLoginParams) => postLogin(params)
    })
}