export interface Todo {
    id: number,
    text: string,
    completed: boolean,
}

export interface TodoState {
    todos: Array<Todo>
}

export interface AddedTodo {
    text: string
}

