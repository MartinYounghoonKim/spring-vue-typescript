import { API } from './coreServices';
import { AddedTodo, FetchedTodo, UpdatedTodo } from '../types/Todo';

export function fetchTodo(): Promise<object> {
    return API.get('/api/todos')
        .then(res => {
            const isSuccess = res.status === 200;
            if (isSuccess) {
                return new Promise(resolve => {
                    resolve({
                        status: 200,
                        data: res.data,
                    });
                })
            } else {
                return new Promise(resolve => {
                    resolve({
                        status: 400,
                        data: {}
                    });
                })
            }
        });
}

export function createTodo (payload: AddedTodo): Promise<object> {
    return API.post('/api/todos', payload).then(res => {
        return new Promise(resolve => {
            return resolve(res.data);
        });
    });
}

export function deleteTodo (primaryKey: number) : Promise<object> {
    return API.delete(`/api/todos/${primaryKey}`);
}

export function updateTodo (payload: UpdatedTodo): Promise<object> {
    return API.put('/api/todos', payload);
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