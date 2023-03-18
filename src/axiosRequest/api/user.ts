import axiosInstance from "../index";

export const getUserInfo = <T>(params: T) => {
  return axiosInstance({
    url: `/api/user/${params}`,
    method: "get",
  });
};
