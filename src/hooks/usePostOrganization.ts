import {useMutation} from "@tanstack/react-query";
import {postOrganization, PostOrganizationParams} from "../api/postOrganization.ts";
import {useNavigate} from "@tanstack/react-router";

export const usePostOrganization = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (params: PostOrganizationParams) => postOrganization(params),
        onSuccess: (data) => {
            const location = data.headers['location'] || data.headers['Location'];
            if (typeof location === 'string') void navigate({to: location});
        }
    })
}