import {all} from 'redux-saga/effects';
import todo from '../modules/todo/sagas';

export default function *root() {
    yield all([
        ...todo,
    ]);
};
