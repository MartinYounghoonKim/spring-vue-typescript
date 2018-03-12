import TODO_TYPES from './mutationsType';
import todoServices from '../services/todoServices';
import { ActionContext } from 'vuex';

import { Todo } from './states';

type TodoContext = ActionContext<Todo, any>;

export function fetchTodos(context: TodoContext ) {
    return todoServices.fetchTodo()
        .then((res: any) => {
            context.commit(TODO_TYPES.FETCH, res.data);
        });
}