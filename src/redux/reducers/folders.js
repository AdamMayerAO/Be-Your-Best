import {
    IS_FETCHING_FOLDERS,
    FETCHED_FOLDERS,
    LOGOUT
} from "../constants";

const initialState = {
    folders: [],
    isFetchingFolders: false
};

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCHED_FOLDERS: {
            console.log("Folders Reducer is being called", action.payload)
            return {
                ...state,
                folders: action.payload,
                isFetchingFolders: false
            };
        }

        case IS_FETCHING_FOLDERS: {
            return {
                ...state,
                isFetchingFolders: action.payload
            }
        }

        case LOGOUT:
            return initialState;
        
        default:
            return state;
    }
}