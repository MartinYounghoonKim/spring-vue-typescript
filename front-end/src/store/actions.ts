import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';

import { Todo, TodoState } from '../types/Todo';

type TodoContext = ActionContext<Todo, any>;

export function fetchTodos(context: TodoContext) {
    return todoServices.fetchTodo()
        .then((res: any) => {
            context.commit('setTodos', res.data);
        });
};

export function createTodo (context: TodoContext, todo: string) {
    return todoServices.createTodo(todo)
        .then((res: any) => {
            console.log(res);
        });
}

export default <ActionTree<any, any>> {
    createTodo,
    fetchTodos,
};