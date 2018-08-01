import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';
import { TodoState } from '../types/Todo';
import App from "../main";

export type TodoContext = ActionContext<TodoState, TodoState>;

export function fetchTodos(context: TodoContext) {
    todoServices.fetchTodo()
        .then(todos => {
            context.commit('setTodos', todos.length > 0 ? todos : []);
        });
};

export function createTodo (context: TodoContext, text: string) {
    todoServices.createTodo(text)
        .then(todo => {
            context.commit('setTodo', todo);
            App.$snotify.success(`${text} is created.`);
            return Promise.resolve(todo);
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