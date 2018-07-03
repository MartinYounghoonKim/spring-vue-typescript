import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';

import { Todo, TodoState, UpdatedTodo, AddedTodo } from '../types/Todo';

type TodoContext = ActionContext<Todo, any>;
interface HTTPResponse {
    status: number,
    data: object
}
export function fetchTodos(context: TodoContext): Promise<any> {
    return todoServices.fetchTodo()
        .then((res: any) => {
            context.commit('setTodos', res);
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