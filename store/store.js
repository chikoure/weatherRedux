import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { asyncRequest } from './asyncRequest';
import { createStore, applyMiddleware, compose } from 'redux';

export function configureStore(initialState = {}) {
  const middleware = [thunk, asyncRequest];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
