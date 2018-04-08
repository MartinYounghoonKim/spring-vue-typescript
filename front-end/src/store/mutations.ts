import { MutationTree } from 'vuex'

import { Todos, TodoState } from '../types/Todo';

const todoMutations: MutationTree <any> = {
    setTodos: (state: TodoState, payload: Todos) => {
        state.todos = payload;
    },
};

export default todoMutations;