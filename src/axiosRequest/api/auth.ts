import axios from "axios";
import axiosInstance from "../index";

export const loginRequest = <T>(data: T) => {
  return axiosInstance({
    url: "/api/auth/login",
    method: "post",
    data,
  });
};

export const logoutRequest = () => {
  return axiosInstance({
    url: "/api/auth/logout",
    method: "post",
  });
};

// export const refreshAccessToken = async(): Promise<string> => {
//   try{
// const response = await axios.post('')
//   }
// };
