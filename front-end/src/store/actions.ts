import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';

import { TodoState, Todo } from '../types/Todo';

type TodoContext = ActionContext<TodoState, TodoState>;

export function fetchTodos(context: TodoContext): Promise<void> {
    return todoServices.fetchTodo()
        .then(res => {
            context.commit('setTodos', res);
        });
};

export function createTodo (context: TodoContext, text: string): Promise<Todo>  {
    return todoServices.createTodo(text)
        .then(res => {
            context.commit('setTodo', res);
            return res;
        });
}

export default <ActionTree<TodoState, TodoState>> {
    createTodo,
    fetchTodos,
};