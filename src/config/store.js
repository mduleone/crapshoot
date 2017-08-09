import rootReducer from './reducers';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = composeEnhancers(applyMiddleware(sagaMiddleware))(createStore);

export default function initializeStore(initialState = {}) {
    const finalReducer = rootReducer;

    const _store = finalCreateStore(finalReducer, initialState);
    sagaMiddleware.run(sagas);

    return _store;
}
