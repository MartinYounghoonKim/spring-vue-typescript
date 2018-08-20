import { GetterTree } from 'vuex'
import { TodoState } from '../../types/Todo';
import {RootState} from "../../types/RootState";

export function getTodosCount (state: TodoState): number {
    const isCompletedTodo = state.todos.map(v => v.completed === true);
    return isCompletedTodo.length;
}

export default <GetterTree<TodoState, RootState>> {
    getTodosCount
}
