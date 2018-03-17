import TODO_TYPES from './mutationsType';
import todoServices from '../services/todoServices';
import { ActionContext, ActionTree } from 'vuex';

import { Todo } from './states';

type TodoContext = ActionContext<Todo, any>;

export function fetchTodos(context: TodoContext ) {
    return todoServices.fetchTodo()
        .then((res: any) => {
            console.log(res);
            context.commit(TODO_TYPES.FETCH, res.data);
        });
};

export default <ActionTree<any, any>> {
    fetchTodos
};