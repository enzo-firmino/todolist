/*
 * action types
 */

import {getAll} from "../services/fetch/todos";

export const TODOS_SET = 'TODOS_SET'
export const TODOS_DELETE = 'TODOS_DELETE'
export const TODOS_ADD = 'TODOS_ADD'
export const TODOS_EDIT = 'TODOS_EDIT'


/*
 * action creators
 */

export function setTodos(todos) {
    return { type: TODOS_SET, todos}
}

export function removeTodo(todo) {
    return { type: TODOS_DELETE, todo }
}

export function addTodo(todo) {
    return { type: TODOS_ADD, todo }
}

export function editTodo(todo) {
    return { type: TODOS_EDIT, todo }
}
