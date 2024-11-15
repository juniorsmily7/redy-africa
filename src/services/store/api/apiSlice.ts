/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '@/lib/axiosInstance';
import { createApi, EndpointDefinitions } from '@reduxjs/toolkit/query/react';

import { AxiosRequestConfig, AxiosError } from 'axios';

import { configErrorsData, configErrorsStatusData } from '@/data/config.data';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

const axiosBaseQuery =
  (): BaseQueryFn<{
    url: string;
    method?: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    headers?: AxiosRequestConfig['headers'];
  }> =>
  async ({ url, method, data }) => {
    try {
      await axiosInstance.get('/sanctum/csrf-cookie');
      const result = await axiosInstance(`api${url}`, { method, data });
      toast.success(result?.data?.message);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError<{ message: string; error: string }>;
      if (
        configErrorsData.includes(err.response?.data?.message as string) ||
        configErrorsStatusData.includes(err?.response?.status as number)
      ) {
        window.location.replace('/auth-login');
      }
      toast.error(err.response?.data?.message || err.response?.data?.error);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['fetchUser', 'fetchCustomers', 'fetchWalletTransaction'],
  endpoints: (): EndpointDefinitions => ({} as EndpointDefinitions),
});
