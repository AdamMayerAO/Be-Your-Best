import {combineReducers} from 'redux';
import traitsReducer from "./traits";
import authReducer from "./auth";
import notesReducer from "./notes";
import foldersReducer from "./folders";

const mainReducer = combineReducers({
    traitsReducer,
    authReducer,
    notesReducer,
    foldersReducer
});

export default mainReducer;