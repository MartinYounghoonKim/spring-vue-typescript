import { API } from './coreServices';

export function fetchTodo(): Promise<object> {
    return API.get('/api/todos');
}

export function createTodo (todo: string): Promise<object> {
    return API.post('/api/todos', { todo });
}

export default {
    fetchTodo,
    createTodo
}
// vo
// dao => db에서 꺼내왔을 때의 Object -> db에 붙어있는
// dto => data transfer// 다른 타입의 Object의 변환