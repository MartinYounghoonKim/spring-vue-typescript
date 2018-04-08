import { Todos } from '../types/Todo';

export interface TodoState {
    todos: Todos
}

export const state: Todos = {
    todos: []
};