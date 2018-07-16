
export interface IHTTPResponse {
    status: number,
    data: object
};


export interface IAxiosResponse<T> {
    isSuccess: boolean;
    data: T;
    status: number;
    message?: string;
}