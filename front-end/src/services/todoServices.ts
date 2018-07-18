import apiServices from './coreServices';
import { IAxiosResponse } from '../types/utils';
import { Todo } from '../types/Todo';
import App from '../main';

export function fetchTodo(): Promise<Todo[]> {
    return apiServices.getMethod('/api/todos')
        .then((res: IAxiosResponse<Todo[]>) => {
            if (res.isSuccess) {
                App.$snotify.info('Hello, anonymous. Welcome to Todo app');
                return res.data;
            } else {
                return [];
            }
        });
}

export function createTodo (text: string): Promise<Todo> {
    return apiServices.postMethod('/api/todos', { text })
        .then((res: IAxiosResponse<Todo>) => {
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
// vo
// dao => db에서 꺼내왔을 때의 Object -> db에 붙어있는
// dto => data transfer// 다른 타입의 Object의 변환