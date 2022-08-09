import axios, { AxiosRequestConfig } from 'axios';
import { getLocalStorageToken } from 'utils/storage';

const baseURL = process.env.REACT_APP_BASE_API;

export const api = axios.create({
  withCredentials: true,
  baseURL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  config!.headers!.Authorization = `Bearer ${getLocalStorageToken()}`;
  return config;
});
