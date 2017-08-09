import * as types from './constants';

const defaultState = {
    nextId: 0,
    todos: [],
};

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case types.ADD_TODO:
            return state;
        case types.RECEIVE_ADD_TODO:
            const newId = state.nextId;
            const newNextId = newId + 1;
            return {
                ...state,
                nextId: newNextId,
                todos: [
                    ...state.todos,
                    {
                        id: newId,
                        isComplete: false,
                        text: action.text,
                        gif: action.gif,
                    },
                ],
            };
        case types.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            isComplete: !todo.isComplete,
                        };
                    }
                    return todo;
                }),
            };
        case types.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        default:
            return state;
    }
}
