import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import modelReducer from './bassModelsDucks';
import bassStrReducer from './stringsDucks';
import tabsReducer from './bassTabsDucks';

const rootReducer = combineReducers({
    bassModels: modelReducer,
    stringModels: bassStrReducer,
    tabs: tabsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}