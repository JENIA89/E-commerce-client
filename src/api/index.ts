import axios, { AxiosRequestConfig } from 'axios';
import { getLocalStorageToken } from 'utils/storage';

const baseURL = process.env.REACT_APP_BASE_API;

export const api = axios.create({ baseURL });

// api.interceptors.request.use((req: any) => {
//   alert('before');
//   req.defaults.headers.common.Authorization = getLocalStorageToken();
//   // if (getLocalStorageToken()) {
//   //   alert('header');
//   //   req!.headers!.Authorization = `Bearer ${getLocalStorageToken()}`;
//   // }
//   alert('after');
//   return req;
// });
