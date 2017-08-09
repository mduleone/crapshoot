import {selectTodos} from '../../../modules/todo/selectors';
import {defaultState} from './states';

describe('selectTodo', () => {
    it('should select the todos array', () => {
        const expected = defaultState.todos;
        const actual = selectTodos(defaultState);
        expect(actual).toEqual(expected);
    });
});
