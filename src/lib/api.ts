import axios from "axios";
import { getRequestConfig, setRequestConfig } from "./helper";

// Axios Interceptor Instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = (await getRequestConfig()).token;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = (await getRequestConfig()).refreshToken;
      try {
        const { data } = await axiosInstance.post("/auth/refresh-token", {
          token: refreshToken,
        });
        setRequestConfig(data.accessToken);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError: unknown) {
        console.log(refreshError);
        // Handle token refresh error (e.g., redirect to login)
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
