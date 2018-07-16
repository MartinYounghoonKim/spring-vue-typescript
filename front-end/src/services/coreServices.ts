import axios, { AxiosRequestConfig, AxiosError, AxiosInstance, AxiosResponse } from 'axios';


const API_CONFIG: AxiosRequestConfig = {
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    responseType: 'json'
};

const API: AxiosInstance = axios.create(API_CONFIG);

export function getMethod (uri: string, params?: object|string|number): Promise<any> {
    return API.get(uri, { params })
        .then((res:AxiosResponse) => {
            return new Promise(resolve => {
                resolve({
                    isSuccess: res.status === 200,
                    data: res.data
                })
            });
        })
        .catch(errorHandler);
}

export function postMethod (uri: string, payload?: object|string|number): Promise<any> {
    return API.post(uri, payload)
        .then((res:AxiosResponse) => {
            return new Promise(resolve => {
                resolve({
                    isSuccess: res.status === 200,
                    data: res.data
                })
            });
        })
        .catch(errorHandler);
}

export function putMethod (uri: string, payload?: object|string|number): Promise<any> {
    return API.put(uri)
        .then((res:AxiosResponse) => {
            return new Promise(resolve => {
                resolve({
                    status: res.status,
                    data: res.data
                })
            });
        })
        .catch(errorHandler);
}

export function deleteMethod (uri: string, params?: object|string|number): Promise<any> {
    return API.delete(uri , { params })
        .then((res:AxiosResponse) => {
            return new Promise(resolve => {
                resolve({
                    status: res.status,
                    data: res.data
                })
            });
        })
        .catch(errorHandler);
}

function errorHandler (error: AxiosError) {
    // Error handler
}

export default {
    getMethod,
    postMethod,
    putMethod,
    deleteMethod
}