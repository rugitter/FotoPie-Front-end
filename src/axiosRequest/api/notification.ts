import axiosInstance from "../index";

export const getNewNotificationCount = () => {
  return axiosInstance({
    url: "/api/notification/count",
    method: "get",
  });
};

export const markNotificationRead = () => {
  return axiosInstance({
    url: "/api/notification/mark-read",
    method: "post",
  });
};