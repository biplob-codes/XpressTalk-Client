import axios from "axios";
export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    Authorization: localStorage.getItem("xpressTalkAccessToken"),
  },
});
