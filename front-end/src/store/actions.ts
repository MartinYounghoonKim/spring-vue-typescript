import TODO_TYPES from './mutationsType';
import TodoAPI from '../api/TodoAPI';
import { ActionTree } from 'vuex'

const todoActions: ActionTree<any, any> = {
    fetchTodos ({ commit }) {
        TodoAPI.get('/')
            .then( (res: any) => {
                commit(TODO_TYPES.FETCH, res.data);
            });
    }
}

export default todoActions;