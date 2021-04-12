import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    RESET_TRAITS
} from "../constants";

const initialState = {
    traits: []
};

export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_TRAIT: {
            return {
                ...state,
                traits: [...state.traits, action.payload.trait]
            };
        }

        case REMOVE_TRAIT: {
            return {
                ...state,
                traits: state.traits.filter((trait)=>trait.id!==action.payload.trait.id)
            };
        }

        case RESET_TRAITS: {
            return {
                ...state,
                traits: []
            };
        }
    
        default:
            return initialState;
    }
}