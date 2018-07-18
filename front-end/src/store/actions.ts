import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';

import { TodoState, Todo } from '../types/Todo';
import App from "../main";

export type TodoContext = ActionContext<TodoState, TodoState>;

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
            App.$snotify.success(`${text} is created.`);

            return Promise.resolve(res);
        })
        .catch(err => {
            App.$snotify.error('Something went wrong.');

            return Promise.reject({ err });
        })
}

export default <ActionTree<TodoState, TodoState>> {
    createTodo,
    fetchTodos,
};