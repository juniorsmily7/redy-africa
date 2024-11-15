import axios, { AxiosInstance } from 'axios';

import { getPersistData } from '../services/app.service';
import { TokenKey } from '@/data/enum.data';
import { BASE_URl } from '@/data/urls.data';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
  withXSRFToken: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getPersistData(TokenKey.TOKEN) || '';
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
