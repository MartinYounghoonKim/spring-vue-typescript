import todoServices from '../../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';
import { TodoState } from '../../types/Todo';
import App from "../../main";
import {RootState} from "../../types/RootState";

export type TodoContext = ActionContext<TodoState, RootState>;

export function fetchTodos(context: TodoContext) {
    todoServices.fetchTodo()
        .then(todos => context.commit('setTodos', todos));
}

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

export default <ActionTree<TodoState, RootState>> {
    createTodo,
    fetchTodos,
};
