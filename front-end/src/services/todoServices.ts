import apiServices from './coreServices';
import { IAxiosResponse } from '../types/utils';
import { Todo } from '../types/Todo';

import Vue from 'vue';
const EventBus = new Vue();

export function fetchTodo(): Promise<Todo[]> {
    return apiServices.getMethod('/api/todos')
        .then((res: IAxiosResponse<Todo[]>) => {
            if (res.isSuccess) {
                EventBus.$snotify.success('환영합니다.');
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
                EventBus.$snotify.success(`새로운 할 일 ${text} 이 생성되었습니다.`);
                return Promise.resolve(res.data);
            } else {
                return Promise.reject({});
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