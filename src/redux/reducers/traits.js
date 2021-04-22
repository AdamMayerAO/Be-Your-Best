import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    RESET_TRAITS,
    IS_FETCHING_ALL_TRAITS,
    FETCHED_ALL_TRAITS
} from "../constants";

const initialState = {
    allTraits: [],
    userTraits: [],
    isFetchingAllTraits: false
};

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCHED_ALL_TRAITS: {
            return {
                ...state,
                allTraits: action.payload,
                isFetchingAllTraits: false
            };
        }

        case IS_FETCHING_ALL_TRAITS: {
            return {
                ...state,
                isFetchingAllTraits: action.payload
            }
        }
        
        case ADD_TRAIT: {
            return {
                ...state,
                userTraits: [...state.userTraits, action.payload.trait]
            };
        }

        case REMOVE_TRAIT: {
            return {
                ...state,
                userTraits: state.userTraits.filter((trait)=>trait.id!==action.payload.trait.id)
            };
        }

        case RESET_TRAITS: {
            return {
                ...state,
                userTraits: []
            };
        }
    
        default:
            return initialState;
    }
}