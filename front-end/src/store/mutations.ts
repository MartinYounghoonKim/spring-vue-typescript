import TODO from './mutationsType';
import { MutationTree } from 'vuex'

import { Todos, TodoState} from './states';

const todoMutations: MutationTree <any> = {
    [TODO.FETCH] (state: TodoState, payload: Todos){
        state.todos = payload;
    },
};

export default todoMutations;