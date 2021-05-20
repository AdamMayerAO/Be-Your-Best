import APIClient from "../../services";
import {
    showToast
} from "../../utils";
import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    RESET_TRAITS,
    FETCHED_ALL_TRAITS,
    IS_FETCHING_ALL_TRAITS,
    FETCHED_USER_TRAITS
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
        })
    }
)


const fetchUserTraits = (onSuccess=()=>{}) => (
    (dispatch) => {
        dispatch(isFetchingAllTraits(true));
        APIClient.get("/traits/user-traits").then((response)=>{
            if(response.status == 200) {
                dispatch({
                    type: FETCHED_USER_TRAITS,
                    payload: response.data.userTraits
                });
                onSuccess(response.data.userTraits);
            } else {
                dispatch(isFetchingAllTraits(false));
                showToast(response.data.message, "error");
            }
        }).catch((error)=>{
            dispatch(isFetchingAllTraits(false));
            showToast(error, "error");
        })
    }
)

const addTrait = (data) => (
    (dispatch) => {
        APIClient.post("/traits/add-user-trait", data).then((response)=>{
            if(response.status === 201) {
                dispatch({
                    type: ADD_TRAIT,
                    payload: data
                });
            } else {
                showToast(response.data.message, "error");
            }
        }).catch((error) => {
            showToast(error, "error");
            console.log({error});
        })
    }
)

const removeTrait = (data) => (
    (dispatch) => {
        APIClient.post("/traits/remove-user-trait", data).then((response)=>{
            if(response.status === 200) {
                dispatch({
                    type: REMOVE_TRAIT,
                    payload: data
                });
            } else {
                showToast(response.data.message, "error");
            }
        }).catch((error) => {
            showToast(error, "error");
            console.log({error});
        })
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
    fetchUserTraits,
    resetTraits
};