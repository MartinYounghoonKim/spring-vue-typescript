import apiServices from './coreServices';

import { IHTTPResponse, IAxiosResponse } from '../types/utils';
import { AddedTodo, FetchedTodo, UpdatedTodo } from '../types/Todo';

export function fetchTodo(): Promise<IAxiosResponse<Array<FetchedTodo>>> {
    return apiServices.getMethod('/api/todos')
        .then((res: IAxiosResponse<Array<FetchedTodo>>) => {
            return res;
        })
}

export function createTodo (payload: AddedTodo): Promise<IAxiosResponse<FetchedTodo>> {
    return apiServices.postMethod('/api/todos', payload)
        .then((res: IAxiosResponse<FetchedTodo>) => {
            return res;
        })
}

export function deleteTodo (id: number) : Promise<IAxiosResponse> {
    return apiServices.deleteMethod('/api/todos', { id })
        .then((res: IHTTPResponse) => {
            return res;
        })
}

export function updateTodo (payload: UpdatedTodo): Promise<IHTTPResponse> {
    return apiServices.putMethod('/api/todos')
        .then((res: IHTTPResponse) => {
            return res;
        })
}

export default {
    fetchTodo,
    createTodo,
    deleteTodo,
    updateTodo
}
// vo
// dao => db에서 꺼내왔을 때의 Object -> db에 붙어있는
// dto => data transfer// 다른 타입의 Object의 변환