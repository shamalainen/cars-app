import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AppReducer from '../reducers';

export const store = createStore(AppReducer, applyMiddleware(logger, thunk));
// export const store = createStore(AppReducer, applyMiddleware(thunk));
