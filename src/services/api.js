import axios from "axios";

//import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://172.23.150.241:3000"
});
/*
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Autorization = `Bearer ${token}`;
  }
  return config;
});
*/
export default api;
