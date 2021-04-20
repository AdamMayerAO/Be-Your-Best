import {combineReducers} from 'redux';
import traitsReducer from "./traits";
import authReducer from "./auth";

const mainReducer = combineReducers({
    traitsReducer,
    authReducer
});

export default mainReducer;