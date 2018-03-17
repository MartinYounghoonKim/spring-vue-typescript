import { GetterTree } from 'vuex'

import { TodoState } from './states';

const todoGetters: GetterTree<any, any> = {
    getTodos (state: TodoState) {
        return state.todos;
    }
};

export default todoGetters;