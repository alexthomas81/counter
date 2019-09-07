import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './reducers/counter.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;