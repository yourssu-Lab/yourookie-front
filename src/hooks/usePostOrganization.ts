import {useMutation} from "@tanstack/react-query";
import {postOrganization, PostOrganizationParams} from "../api/postOrganization.ts";

export const usePostOrganization = () => {
    return useMutation({
        mutationFn: (params: PostOrganizationParams) => postOrganization(params)
    })
}