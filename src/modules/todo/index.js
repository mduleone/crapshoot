import * as types from './constants';

export function addTodo(text) {
    return {type: types.ADD_TODO, text};
}

export function receiveAddTodo(text, gif) {
    return {type: types.RECEIVE_ADD_TODO, text, gif};
}

export function removeTodo(id) {
    return {type: types.REMOVE_TODO, id};
}

export function toggleTodo(id) {
    return {type: types.TOGGLE_TODO, id};
}
