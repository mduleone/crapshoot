import {put, call} from 'redux-saga/effects';
import * as api from '../../../api/todo';
import * as actions from '../../../modules/todo';
import * as sagas from '../../../modules/todo/sagas';

describe('getGiphy', () => {
    let saga;
    let text;
    let action;
    let gifUrl;
    let actual;
    let expected;
    beforeAll(() => {
        text = 'text';
        action = actions.addTodo(text);
        gifUrl = 'gifUrl';
        saga = sagas.getGiphy(action);
    });

    it('should call api.getGiphy', () => {
        expected = call(api.getGiphy, text);
        actual = saga.next().value;
        expect(actual).toEqual(expected);
    });

    it('should put the receive action', () => {
        expected = put(actions.receiveAddTodo(text, gifUrl));
        actual = saga.next(gifUrl).value;
        expect(actual).toEqual(expected);
    });
});
