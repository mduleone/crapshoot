import * as actions from '../../../modules/todo';
import reducer from '../../../modules/todo/reducer';
import {defaultState} from './states';

describe('the todo reducer', () => {
    let todoToAdd;
    let text;
    let gif;
    let id;
    let isComplete;

    beforeAll(() => {
        text = 'text';
        gif = 'gif';
        id = 0;
        isComplete = false;
        todoToAdd = {
            id,
            text,
            gif,
            isComplete,
        };
    });

    it('should return the default state on ADD_TODO', () => {
        const expected = {...defaultState};
        const actual = reducer({...defaultState}, actions.addTodo('text'));
        expect(actual).toEqual(expected);
    });

    it('should add the new todo on RECEIVE_ADD_TODO', () => {
        const todo = {
            id: 0,

        };

        const expected = {
            ...defaultState,
            nextId: 1,
            todos: [
                todoToAdd,
            ],
        };

        const actual = reducer({...defaultState}, actions.receiveAddTodo(text, gif));

        expect(actual).toEqual(expected);
    });

    it('should toggle the passed in todo on TOGGLE_TODO', () => {
        const expected = {
            ...defaultState,
            nextId: 1,
            todos: [
                {
                    ...todoToAdd,
                    isComplete: true,
                },
            ],
        };

        const actual = reducer({
            ...defaultState,
            nextId: 1,
            todos: [todoToAdd],
        }, actions.toggleTodo(id));

        expect(actual).toEqual(expected);
    });

    it('remove the todo on REMOVE_TODO', () => {
        const expected = {
            ...defaultState,
            nextId: 1,
            todos: [],
        };

        const actual = reducer({
            ...defaultState,
            nextId: 1,
            todos: [todoToAdd],
        }, actions.removeTodo(id));

        expect(actual).toEqual(expected);
    });
});
