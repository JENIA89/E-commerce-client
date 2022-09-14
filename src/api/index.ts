import axios, { AxiosRequestConfig } from "axios";
import { getLocalStorageToken } from "utils/storage";

const baseURL = process.env.REACT_APP_BASE_API;

export const api = axios.create({ baseURL });

api.interceptors.request.use((req: any) => {
  if (getLocalStorageToken()) {
    req.headers.Authorization = `Bearer ${getLocalStorageToken()}`;
  }
  return req;
});
