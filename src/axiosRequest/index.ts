import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import axiosConfig from "./config";



export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const axiosInstance = axios.create({
    timeout: axiosConfig.timeOut as number | undefined,
    withCredentials: true,
    ...config,
  });

  // resquest interceptor - before request is sent
  axiosInstance.interceptors.request.use(
    function (config: any) {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      accessToken &&
        (config.headers["Authorization"] = `Bearer ${accessToken}`);

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // response interceptor - after response is received
  axiosInstance.interceptors.response.use(
    
    function (response) {
      console.log("response:", response);
      const { status, data } = response;
      console.log(status);

      if (status === 200) {
        return data;
      } else if (status === 401) {
        //console.log(status,"123")
        

        
      } else {
        return Promise.reject(response.data);
      }
    },
    function (error) {
      let message = "";
      
      
      if (error && error.response) {
        switch (error.response.status) {
          case 302:
            message = "Redirect to other url";
            break;
          case 400:
            message = "Bad request!";
            break;
          case 401:
            message = "Please login!";
            //NextResponse.redirect('/login');
            const router = useRouter();
            router.push("/login");
            
            break;
          case 403:
            message = "Forbidden!";
            break;
          case 404:
            message = `Not found!: ${error.response.config.url}`;
            break;
          case 408:
            message = "request timeout!";
            break;
          case 409:
            message = "Conflict!";
            break;
          case 500:
            message = "Internal Server Error!";
            break;
          case 501:
            message = "Not Implemented!";
            break;
          case 502:
            message = "Bad Gateway!";
            break;
          case 503:
            message = "Service Unavailable!";
            break;
          case 504:
            message = "Gateway Timeout! Please try again later!";
            break;
          case 505:
            message = "HTTP Version Not Supported!";
            break;
          default:
            message = "Something went wrong!";
            break;
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
