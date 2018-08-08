import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { AjaxResponse } from "../types/Ajax";

const API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  responseType: 'json'
};

const API: AxiosInstance = axios.create(API_CONFIG);

export function getMethod<T>(uri: string, params?: any): Promise<AjaxResponse<T>> {
  return new Promise(resolve => {
    API.get(uri, { params })
      .then((res: AxiosResponse) => {
        resolve({
          isSuccess: res.status === 200,
          status: res.status,
          data: res.data
        })
      });
  });
}

export function postMethod<T>(uri: string, payload?: any): Promise<AjaxResponse<T>> {
  return new Promise(resolve => {
    API.post(uri, payload)
      .then((res: AxiosResponse) => {
        resolve({
          isSuccess: res.status === 200,
          status: res.status,
          data: res.data
        })
      });
  });
}

export default {
  getMethod,
  postMethod
}