import { createAxiosByinterceptors } from "../index";

const request = createAxiosByinterceptors();

export const getMe = () => {
  return request({
    url: "/api/editUser/me",
    method: "get",
  });
};

export const updateName = <T>(data: T) => {
  return request({
    url: `/api/editUser/updateName`,
    method: "patch",
    data,
  });
};

export const upload = <T>(data: T) => {
  return request({
    url: `/api/editUser/upload`,
    method: "patch",
    data,
  });
};
