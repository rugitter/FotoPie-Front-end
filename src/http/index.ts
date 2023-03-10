import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const axiosInstance = axios.create({
    timeout: process.env.REQUEST_TIMEOUT as number | undefined,
    withCredentials: true,
    ...config,
  });

  const router = useRouter();
  
  // 添加请求拦截器
  axiosInstance.interceptors.request.use(
    function (config: any) {
      console.log("config:", config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  axiosInstance.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      console.log("response:", response);
      const { code, data, message } = response.data;
      if (code === 200) return data;
      else if (code === 401) {
        router.push("/login");
      } else {
        return Promise.reject(response.data);
      }
    },
    function (error) {
      // 对响应错误做点什么
      console.log("error-response:", error.response);
      console.log("error-config:", error.config);
      console.log("error-request:", error.request);
      if (error.response) {
        if (error.response.status === 401) {
          router.push("/login");
        }
      }

      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
