import { API } from './coreServices';

export function fetchTodo(): Promise<object> {
    return new Promise(resolve => {
        resolve({
            data: [
                {
                    id: 1,
                    todo: 'Todo List01',
                    completed: false,
                },{
                    id: 2,
                    todo: 'Todo List02',
                    completed: true,
                }
            ]
        });
    });
    // return API.get('/api/todos');
}

export default {
    fetchTodo
}