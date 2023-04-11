import axiosInstance from "../index";

export const getToken = () => {
  return axiosInstance({
    url: "/api/everypixel",
    method: "get",
  });
};

export const getImageQuality = <T>(url:string) => {
  return axiosInstance({
    url: `/api/everypixel/quality/url=${url}`,
    method: "get",
  });
};

export const sendQualityRank = <T>(filenamestring: T,  score: string) => {
  return axiosInstance({
    url: `/api/quality/${filenamestring}?score=${score}`,
    method: "post",
  });
};

export const findQualityPosts = <T>(page:Number, limit: Number) => {
  return axiosInstance({
    url: `/api/quality/?page=${page}?limit=${limit}`,
    method: "get",
  });
};
