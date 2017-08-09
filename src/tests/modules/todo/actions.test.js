import * as actions from '../../../modules/todo';
import * as types from '../../../modules/todo/constants';

describe('addTodo', () => {
    it('should return an ADD_TODO action', () => {
        const text = 'text';
        const expected = {type: types.ADD_TODO, text};
        const actual = actions.addTodo(text);
        expect(actual).toEqual(expected);
    });
});

describe('receiveAddTodo', () => {
    it('should return an RECEIVE_ADD_TODO action', () => {
        const text = 'text';
        const gif = 'gif';
        const expected = {type: types.RECEIVE_ADD_TODO, text, gif};
        const actual = actions.receiveAddTodo(text, gif);
        expect(actual).toEqual(expected);
    });
});

describe('removeTodo', () => {
    it('should return an REMOVE_TODO action', () => {
        const id = 'id';
        const expected = {type: types.REMOVE_TODO, id};
        const actual = actions.removeTodo(id);
        expect(actual).toEqual(expected);
    });
});

describe('toggleTodo', () => {
    it('should return an TOGGLE_TODO action', () => {
        const id = 'id';
        const expected = {type: types.TOGGLE_TODO, id};
        const actual = actions.toggleTodo(id);
        expect(actual).toEqual(expected);
    });
});
