import { IHTTPResponse } from '../types/utils';
import apiServices from './coreServices';

import { AddedTodo, FetchedTodo, UpdatedTodo } from '../types/Todo';

export function fetchTodo(): Promise<IHTTPResponse> {
    return apiServices.getMethod('/api/todos')
        .then((res: IHTTPResponse) => {
            console.log('services', res)
            return res;
        })
}

export function createTodo (payload: AddedTodo): Promise<IHTTPResponse> {
    return apiServices.postMethod('/api/todos')
        .then((res: IHTTPResponse) => {
            return res;
        })
}

export function deleteTodo (primaryKey: number) : Promise<IHTTPResponse> {
    return apiServices.deleteMethod('/api/todos')
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