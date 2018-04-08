import { MutationTree } from 'vuex'

import { TodoState } from '../types/Todo';

const todoMutations: MutationTree <TodoState> = {
    setTodos: (state: TodoState, payload) => {
        state.todos = payload;
    },
};

export default todoMutations;