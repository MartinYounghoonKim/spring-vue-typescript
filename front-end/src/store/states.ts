export interface Todos {
    todos: Todo[]
};
// TODO: Update 되는 Todo의 interface를 생성할 것
export interface Todo {
    id: number,
    todo: string,
    isDone: boolean,
}

export interface TodoState {
    todos: Todos
}

export const state: Todos = {
    todos: []
};