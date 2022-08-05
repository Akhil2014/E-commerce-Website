import {compose, applyMiddleware, combineReducers, createStore } from "redux";
import {ApiReducer} from './ApiReducer/ApiReducer'
import thunk from "redux-thunk";
export const store = createStore(ApiReducer,applyMiddleware(thunk))