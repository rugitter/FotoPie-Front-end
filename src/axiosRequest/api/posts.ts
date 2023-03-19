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

export const deletePost = <T>(params: T) => {
  return axiosInstance({
    url: `/api/profile/${params}`,
    method:"delete",
  });
};
