import {
    SET_IS_FETCHING,
    SET_IS_POSTING,
    FETCH_USER,
    LOGIN,
    SIGNUP,
    LOGOUT
} from "../constants";

const initState = {
    user: null,
    isAuthenticated: false,
    isPosting: false,
    isFetching: true
};

export default (state=initState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }

        case SET_IS_POSTING: {
            return {
                ...state,
                isPosting: action.payload
            }
        }

        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isPosting: false
            };
        }

        case FETCH_USER: {
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isFetching: false
            };
        }

        case LOGOUT:
            return initState;
    
        default:
            return state;
    }
}