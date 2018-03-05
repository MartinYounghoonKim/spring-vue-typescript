import { GetterTree } from 'vuex'


const todoGetters: GetterTree<any, any> = {
    getTodos (state) {
        return state.todos;
    }
};

export default todoGetters;