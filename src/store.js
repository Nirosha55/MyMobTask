import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import AppReducer from './redux';

const reducer = combineReducers({
    app: AppReducer
});
const store = configureStore({
    reducer,
})
export default store;