import TODO_TYPES from './mutationsType';
import todoServices from '../services/todoServices';
import { ActionContext } from 'vuex';

export function fetchTodos(store: ActionContext<any, any>) {
    return todoServices.fetchTodo()
        .then((res: any) => {
            store.commit(TODO_TYPES.FETCH, res.data);
        })
}