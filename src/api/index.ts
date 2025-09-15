'use client';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { Error } from './methods/models';

const handleResponse = (response: AxiosResponse) => {
  return response;
};

const handleError = (error: AxiosError<Error>) => {
  toast.error(error.response?.data.title);
  return Promise.reject(error);
};

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(handleResponse, handleError);

export const api = async (options?: AxiosRequestConfig, authenticate = true) => {
  const headers = options?.headers ? { ...options.headers } : {};
  if (authenticate) {
    const token = localStorage.getItem('token');
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axiosInstance({
      ...options,
      headers,
      url: `http://localhost:8080/${options?.url}`
    });

    return response;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
