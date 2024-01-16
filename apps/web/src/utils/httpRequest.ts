//@ts-nocheck

import axios, { AxiosRequestConfig } from 'axios';

import { authenSevice } from '@/api';
import { URL_API } from '@/constant/api';
import { storageService } from '@/helper';

export const request = axios.create({
  baseURL: URL_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  },
});
request.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = storageService.getItem('accessToken');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      try {
        originalRequest._retry = true;
        const result = await authenSevice.refreshToken();
        request.defaults.headers.common['Authorization'] = 'Bearer ' + result.accessToken;
        return request(originalRequest);
      } catch (err) {
        window.location.href = '/login';
        return Promise.reject(error);
      }
    } else if (error.response.status === 400) {
      throw new Error({ status: 400, title: 'Something went wrong!' });
    }
    return Promise.reject(error);
  }
);
export const get = async (path: string, option?: {}) => {
  const result = await request.get(path, option);
  return result.data;
};

export const post = async (path: string, option?: {}, config?: AxiosRequestConfig) => {
  const result = await request.post(path, option, config);
  return result.data;
};
export const remove = async (path: string, config?: AxiosRequestConfig) => {
  const result = await request.delete(path, config);
  return result.data;
};
export const update = async (path: string, option?: {}, config?: AxiosRequestConfig) => {
  const result = await request.put(path, option, config);
  return result.data;
};
