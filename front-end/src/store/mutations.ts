import TODO from './mutationsType';
import { MutationTree } from 'vuex'
import { Todo } from '../Interfaces/Todo.Interface';

const todoMutations: MutationTree <any> = {
    [TODO.FETCH] (state: any, payload: Todo){
        state.todos = payload;
    },
}

export default todoMutations;