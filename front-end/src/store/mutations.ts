import {FetchedTodo, Todo, TodoState} from '../types/Todo';

export function setTodos (state: TodoState, payload: Array<Todo>) {
    state.todos = payload;
}

export function setTodo (state: TodoState, payload: FetchedTodo) {
    state.todos.push(payload);
}

export default {
    setTodos,
    setTodo,
};