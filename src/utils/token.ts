import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getAccessToken = () => {
  return cookies.get("accessToken");
};

export const setAccessToken = (token: string) => {
  cookies.set("accessToken", token, { path: "/" });
};
