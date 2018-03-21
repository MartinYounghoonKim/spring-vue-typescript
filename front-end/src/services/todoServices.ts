import { API } from './coreServices';

export function fetchTodo(): Promise<object> {
    return new Promise(resolve => {
        resolve({
            data: [
                {
                    id: 1,
                    todo: 'Todo List01',
                    isDone: false,
                },{
                    id: 2,
                    todo: 'Todo List02',
                    isDone: true,
                }
            ]
        });
    });
    // return API.get('/api/todos');
}

export default {
    fetchTodo
}