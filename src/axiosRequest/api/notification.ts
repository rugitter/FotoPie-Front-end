import axiosInstance from "../index";


export const getNotification= () => {
    return axiosInstance({
      url: `/api/notification/latest`,
      method: "get",
    });
};