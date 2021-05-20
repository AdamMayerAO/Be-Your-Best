import {
    ADD_NOTE,
    REMOVE_NOTE,
    EDIT_NOTE,
    IS_FETCHING_NOTES,
    FETCHED_NOTES,
    SEARCH_NOTES,
    LOGOUT
} from "../constants";

const initialState = {
    notes: [],
    isFetchingNotes: false,
};

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCHED_NOTES: {
            console.log("Notes Reducers being called", action.payload)
            return {
                ...state,
                notes: action.payload,
                isFetchingNotes: false
            };
        }
        case SEARCH_NOTES: {
            return {
                ...state,
                notes: action.payload,
                isFetchingNotes: false
            };
        }

        case IS_FETCHING_NOTES: {
            return {
                ...state,
                isFetchingNotes: action.payload
            }
        }
        
        case ADD_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.payload.note]
            };
        }

        case REMOVE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter((note)=>note.id!==action.payload.note.id)
            };
        }

        case EDIT_NOTE: {
            return {
                ...state
            };
        }

        case LOGOUT:
            return initialState;
    
        default:
            return state;
    }
}