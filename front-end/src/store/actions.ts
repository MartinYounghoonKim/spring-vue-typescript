import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';
import {IAxiosResponse, IHTTPResponse} from '../types/utils';

import { TodoState, UpdatedTodo, AddedTodo, FetchedTodo } from '../types/Todo';

type TodoContext = ActionContext<TodoState, TodoState>;

export function fetchTodos(context: TodoContext): Promise<IHTTPResponse> {
    return todoServices.fetchTodo()
        .then((res: IAxiosResponse<Array<FetchedTodo>>) => {
            const statusCode = res.status;
            if (statusCode === 200) {
                context.commit('setTodos', res.data);
            }
            return res;
        });
};

export function createTodo (context: TodoContext, payload: AddedTodo): Promise<IHTTPResponse>  {
    return todoServices.createTodo(payload)
        .then((res: IAxiosResponse<FetchedTodo>) => {
            const statusCode = res.status;
            if (statusCode === 200) {
                context.commit('setTodo', res.data);
            }
            return res;
        });
}

export function updateTodo (context: TodoContext, payload: UpdatedTodo) {
    return todoServices.updateTodo(payload)
        .then(res => {
            //
        });
}

export function deleteTodo (context: TodoContext, id: number) {
    return todoServices.deleteTodo(id)
        .then(res => {
            //
        })
}

export default <ActionTree<TodoState, TodoState>> {
    createTodo,
    fetchTodos,
    updateTodo,
    deleteTodo
};