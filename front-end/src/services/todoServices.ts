import { API } from './coreServices';

export function fetchTodo(): Promise<object> {
    return API.get('/api/todos');
}