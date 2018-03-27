export interface Todos {
    todos: Todo[]
};

export interface Todo {
    id: number,
    text: string,
    completed?: boolean,
};