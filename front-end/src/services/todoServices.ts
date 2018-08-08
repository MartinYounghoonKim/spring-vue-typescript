import apiServices from './coreServices';
import { Todo } from '../types/Todo';
import App from '../main';

export function fetchTodo(): Promise<Todo[]> {
    return apiServices.getMethod<Todo[]>('/api/todos')
        .then(res => {
            if (res.isSuccess) {
                App.$snotify.info('Hello, anonymous. Welcome to Todo app');
                return res.data;
            } else {
                return [];
            }
        });
}

export function createTodo (text: string): Promise<Todo> {
    return apiServices.postMethod<Todo>('/api/todos', { text })
        .then(res => {
            if (res.isSuccess) {
                return Promise.resolve(res.data);
            } else {
                // 서버에서 message 가 내려올 경우
                return Promise.reject('Something went wrong.');
            }
        })
}

export default {
    fetchTodo,
    createTodo,
}
