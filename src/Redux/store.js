import {compose, applyMiddleware, combineReducers, createStore } from "redux";
import {ApiReducer} from './ApiReducer/ApiReducer'
import {CartReducer} from './CartReducer/CartReducer'
import {AuthReducer} from './AuthReducer/AuthReducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    ApiReducer,
    CartReducer,
    AuthReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;
export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))