import { GetterTree } from 'vuex'

import { TodoState } from '../types/Todo';

const todoGetters: GetterTree<any, any> = {
    getTodosCount (state: TodoState): number {
        const isCompletedTodo = state.todos.map(v => v.completed === true);

        return isCompletedTodo.length;
    }
};

export default todoGetters;