import { ActionContext, ActionTree } from 'vuex';
import { ButtonState } from '../../types/Button';
import { RootState } from "../../types/RootState";

export type TodoContext = ActionContext<ButtonState, RootState>;

export function activeButton (context: TodoContext) {
  context.commit('setButton');
}

export function unactiveButton (context: TodoContext) {
  context.commit('unsetButton');
}

export default <ActionTree<ButtonState, RootState>> {
  activeButton,
  unactiveButton
};
