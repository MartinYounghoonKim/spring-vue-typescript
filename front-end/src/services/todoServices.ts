import { API } from './coreServices';
import { AddedTodo, UpdatedTodo } from '../types/Todo';

export function fetchTodo(): Promise<object> {
    return API.get('/api/todos');
}

export function createTodo (payload: AddedTodo): Promise<object> {
    console.log(payload);
    return API.post('/api/todos', payload);
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