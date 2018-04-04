import { GetterTree } from 'vuex'

import { TodoState } from '../types/Todo';

const todoGetters: GetterTree<any, any> = {
    getTodos (state: TodoState) {
        return state.todos;
    }
};

export default todoGetters;