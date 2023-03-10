import { createAxiosByinterceptors } from "../index";

const request = createAxiosByinterceptors();

export const login = <T>(data: T) => {
  return request({
    url: "/api/auth/login",
    method: "post",
    data,
  });
};

export const getUserInfo = <T>(params: T) => {
  return request({
    url: `/api/user/${params}`,
    method: "get",
  });
};

export const getMe = () => {
  return request({
    url: '/api/editUser/me',
    method: "get",
  });
};