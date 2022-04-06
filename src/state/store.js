import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchReducer } from './fetchReducer';

export const store = createStore(fetchReducer, applyMiddleware(thunk));
