import {put, call, takeLatest} from 'redux-saga/effects';

import * as types from './constants';
import * as actions from './index';
import * as api from '../../api/todo';

export function *getGiphy(action) {
    const giphyResult = yield call(api.getGiphy, action.text);

    yield put(actions.receiveAddTodo(action.text, giphyResult));
}

export default [
    takeLatest(types.ADD_TODO, getGiphy),
];
