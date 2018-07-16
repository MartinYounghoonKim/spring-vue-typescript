import { Todo, TodoState } from '../types/Todo';

export function setTodos (state: TodoState, payload: Todo[]) {
    state.todos = payload;
}

export function setTodo (state: TodoState, payload: Todo) {
    state.todos.push(payload);
}

export default {
    setTodos,
    setTodo,
};