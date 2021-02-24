import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import modelReducer from './bassModelsDucks';
import bassStrReducer from './stringsDucks';
import tabsReducer from './bassTabsDucks';
import userReducer, { loggedUser } from './userDucks';

const rootReducer = combineReducers({
    bassModels: modelReducer,
    stringModels: bassStrReducer,
    tabs: tabsReducer,
    googleUser: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    loggedUser()(store.dispatch);
    return store;
}