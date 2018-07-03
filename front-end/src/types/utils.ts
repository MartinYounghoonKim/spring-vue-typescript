
export interface IHTTPResponse {
    status: number,
    data: object
};


export interface IAxiosResponse<T = any> {
    data: T;
    status: number;
    message?: string;
}