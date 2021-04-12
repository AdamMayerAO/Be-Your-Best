import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    RESET_TRAITS
} from "../constants";

const addTrait = (data) => (
    (dispatch) => {
        dispatch({
            type: ADD_TRAIT,
            payload: data
        });
    }
)

const removeTrait = (data) => (
    (dispatch) => {
        dispatch({
            type: REMOVE_TRAIT,
            payload: data
        });
    }
)

const resetTraits = () => (
    (dispatch) => {
        dispatch({
            type: RESET_TRAITS
        });
    }
)

export {
    addTrait,
    removeTrait,
    resetTraits
};