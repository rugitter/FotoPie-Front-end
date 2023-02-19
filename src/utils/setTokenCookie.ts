import Cookies from "js-cookie";

export const setTokenCookie = (token: string): void => {
  Cookies.set("jwt", token, { expires: 7 });
};
