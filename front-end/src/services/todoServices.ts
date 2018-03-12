import { API } from './coreServices';

export function fetchTodo(): Promise<any> {
    return API.get('/api/todos');
}