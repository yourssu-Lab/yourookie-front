import {api} from "../service/TokenService.ts";

export const useLoginState = () => {
    return {isLoggedIn: api.getAccessToken() !== undefined};
}