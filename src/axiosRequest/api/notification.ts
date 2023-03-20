import axiosInstance from "../index";

export const count = () => {
  return axiosInstance({
    url: "/api/notification/count",
    method: "get",
  });
};