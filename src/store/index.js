import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'

import * as home from './Home/reducer';

let store = createStore(
    combineReducers({
        router: routerReducer,
        ...home
    }),
    applyMiddleware(thunk)
);

export default store;