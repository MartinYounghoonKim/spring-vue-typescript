export interface AjaxResponse<T> {
    isSuccess: boolean;
    data: T;
    status: number;
    message?: string;
}