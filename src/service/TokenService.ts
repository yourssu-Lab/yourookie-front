import { Cookies } from "react-cookie";

class TokenService {
  cookie = new Cookies();

  setAccessToken(token: string) {
    this.cookie.set("accessToken", token, { path: "/" });
  }
  setRefreshToken(token: string) {
    this.cookie.set("refreshToken", token, { path: "/" });
  }

  setUserId(id: number) {
    this.cookie.set("userId", id, { path: "/" });
  }

  getUserId() {
    return this.cookie.get("userId");
  }

  getAccessToken() {
    return this.cookie.get("accessToken");
  }
  getRefreshToken() {
    return this.cookie.get("refreshToken");
  }

  logout() {
    this.cookie.remove("accessToken", { path: "/" });
    this.cookie.remove("refreshToken", { path: "/" });
    this.cookie.remove("userId", { path: "/" });
  }

  get headers() {
    if (this.getAccessToken())
      return {
        Authorization: this.getAccessToken(),
      };
    return {};
  }
}

export const api = new TokenService();
