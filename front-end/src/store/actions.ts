import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';
import { IHTTPResponse } from '../types/utils';

import { Todo, TodoState, UpdatedTodo, AddedTodo } from '../types/Todo';

type TodoContext = ActionContext<Todo, any>;

export function fetchTodos(context: TodoContext): Promise<IHTTPResponse> {
    return todoServices.fetchTodo()
        .then((res: IHTTPResponse) => {
            const statusCode = res.status;
            if (statusCode === 200) {
                context.commit('setTodos', res.data);
            }
            return res;
        });
};

export function createTodo (context: TodoContext, payload: AddedTodo) {
    return todoServices.createTodo(payload)
        .then((res: object) => {
            context.commit('setTodo', res);
            console.log(res);
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

export default <ActionTree<any, any>> {
    createTodo,
    fetchTodos,
    updateTodo,
    deleteTodo
};