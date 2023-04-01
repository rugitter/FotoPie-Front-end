import axiosInstance from "../index";

export const uploadPhoto = <T>(data: T) => {
  return axiosInstance({
    url: `api/posts/upload`,
    method: "patch",
    data,
  });
};

export const uploadPost = <T>(data: T) => {
  return axiosInstance({
    url: `/api/posts/sent`,
    method: "post",
    data,
  });
};

export const uploadPhotoNew = <T>(data: T) => {
  return axiosInstance({
    url: `api/postsnew/upload`,
    method: "patch",
    data,
  });
};

export const uploadPostNew = <T>(data: T) => {
  return axiosInstance({
    url: `/api/postsnew/sent`,
    method: "post",
    data,
  });
};
