import axios from "axios";
export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("xpressTalkAccessToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
