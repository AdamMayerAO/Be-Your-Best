import APIClient from "../../services";
import {
    showToast
} from "../../utils";
import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    RESET_TRAITS,
    FETCHED_ALL_TRAITS,
    IS_FETCHING_ALL_TRAITS
} from "../constants";

const isFetchingAllTraits = (status) => {
    return ({
        type: IS_FETCHING_ALL_TRAITS,
        payload: status
    });
}

const fetchAllTraits = () => (
    (dispatch) => {
        dispatch(isFetchingAllTraits(true));
        APIClient.get("/traits/all").then((response)=>{
            if(response.status == 200) {
                dispatch({
                    type: FETCHED_ALL_TRAITS,
                    payload: response.data.traits
                });
            } else {
                dispatch(isFetchingAllTraits(false));
                showToast(response.data.message, "error");
            }
        }).catch((error)=>{
            dispatch(isFetchingAllTraits(false));
            showToast(error, "error");
            console.log({error});
        })
    }
)

const addTrait = (data) => (
    (dispatch) => {
        //call the api
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
    fetchAllTraits,
    resetTraits
};