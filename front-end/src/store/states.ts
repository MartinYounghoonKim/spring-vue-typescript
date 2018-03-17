export interface Todos {
    todos: Todo[]
};

export interface Todo {
    id: number,
    todo: string,
    isDone?: boolean,
}

export interface TodoState {
    todos: Todos
}