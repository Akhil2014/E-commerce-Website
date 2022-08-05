import {compose, applyMiddleware, combineReducers, createStore } from "redux";
import {ApiReducer} from './ApiReducer/ApiReducer'
import {CartReducer} from './CartReducer/CartReducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    ApiReducer,
    CartReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))