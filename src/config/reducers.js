import {combineReducers} from 'redux';
import todo from '../modules/todo/reducer';

const reducer = combineReducers({
    todo,
});

export default reducer;
