import axios, { AxiosRequestConfig, Method } from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "api",
  timeout: process.env.REQUEST_TIMEOUT as number | undefined,
  withCredentials: true,
});

// resquest interceptor - before request is sent
service.interceptors.request.use((config:any) => {
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers["Authorization"] = `Bearer ${accessToken}`);
  return config;
});

const axiosRequest = async(
  url: string,
  method: Method,
  submitData: object,
  config?: AxiosRequestConfig
) => {
  return await service.request({
    url,
    method,
    [method.toLocaleLowerCase() === "get" ? "params" : "data"]: submitData,
    ...config,
  });
};

export default axiosRequest;
