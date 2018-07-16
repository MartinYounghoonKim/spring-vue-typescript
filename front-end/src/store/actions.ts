import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';

import { TodoState, Todo } from '../types/Todo';

type TodoContext = ActionContext<TodoState, TodoState>;

export function fetchTodos(context: TodoContext): Promise<void> {
    return todoServices.fetchTodo()
        .then(todos => {
            if (todos.length > 0) {
                context.commit('setTodos', todos);
            }
        });
};

export function createTodo (context: TodoContext, text: string): Promise<Todo>  {
    return todoServices.createTodo(text)
        .then(res => {
            context.commit('setTodo', res);
            return Promise.resolve(res);
        })
        .catch(err => {
            return Promise.reject({ err });
        })
}

export default <ActionTree<TodoState, TodoState>> {
    createTodo,
    fetchTodos,
};