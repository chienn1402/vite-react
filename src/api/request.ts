import { message } from 'antd';
import axios, { AxiosError } from 'axios';

const requestWithJwt = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

requestWithJwt.interceptors.request.use((config) => {
  return config;
});

requestWithJwt.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error);
  },
);

const requestWithoutJwt = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

requestWithoutJwt.interceptors.request.use((config) => {
  return config;
});

requestWithoutJwt.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error);
  },
);

export { requestWithJwt, requestWithoutJwt };
