import buttonServices from '../../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';
import { ButtonState } from '../../types/Button';
import { RootState } from "../../types/RootState";

export type TodoContext = ActionContext<ButtonState, RootState>;

export function activeButton (context: TodoContext) {
    buttonServices.fetchTodo()
        .then(todos => context.commit('setTodos', todos));
}

export function unactiveButton (context: TodoContext) {
    buttonServices.fetchTodo()
        .then(todos => context.commit('setTodos', todos));
}

export default <ActionTree<ButtonState, RootState>> {
  activeButton,
  unactiveButton
};
