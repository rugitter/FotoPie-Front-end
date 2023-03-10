import { createAxiosByinterceptors } from "../index";

const request = createAxiosByinterceptors();

export const getMe = () => {
  return request({
    url: "/api/editUser/me",
    method: "get",
  });
};

