import APIClient from "../../services";
import {
    SET_IS_POSTING,
    SET_IS_FETCHING,
    LOGIN,
    SIGNUP,
    LOGOUT,
    FETCH_USER
} from "../constants";
import {
    showToast
} from "../../utils";

const isPosting = (status) => {
    return {
        type: SET_IS_POSTING,
        payload: status
    };
}

const isFetching = (status) => {
    return {
        type: SET_IS_FETCHING,
        payload: status
    };
}

const fetchUser = () => ((dispatch)=>{
    console.log("Fetching user.....");
    dispatch(isFetching(true));
    APIClient.get("/user/get").then((response)=>{
        console.log("\n\nFetch User Response: ", response, "\n\n")
        if(response.status == 200) {
            dispatch({
                type: FETCH_USER,
                payload: response.data.user
            });
        } else {
            dispatch(isFetching(false));
            showToast(response.data.message, "error");
        }
    }).catch((error)=>{
        dispatch(isFetching(false));
        showToast(error, "error");
        console.log({error});
    })
})

const login = (data, onSuccess=()=>{}, onError=()=>{}) => ((dispatch)=>{
    dispatch(isPosting(true));
    APIClient.post("/user/login", data).then((response)=>{
        console.log("\n\nLogin Response: ", response, "\n\n")
        if(response.status == 200) {
            dispatch({
                type: LOGIN,
                payload: data
            });
            onSuccess(response.data.accessToken);
            showToast(response.data.message, "success");
        } else {
            dispatch(isPosting(false));
            showToast(response.data.message, "error");
        }
    }).catch((error)=>{
        dispatch(isPosting(false));
        showToast(error, "error");
        console.log({error});
    })
})

const signup = (data) => ((dispatch)=>{
    dispatch(isPosting(true));
    APIClient.post("/user/signup", data).then((response)=>{
        if(response.status == 201) {
            // dispatch({
            //     type: SIGNUP,
            //     payload: data
            // });
            dispatch(isPosting(false));
            showToast(response.data.message, "success");
        } else {
            dispatch(isPosting(false));
            showToast(response.data.message, "error");
        }
    }).catch((error)=>{
        dispatch(isPosting(false));
        showToast(error, "error");
        console.log({error});
    })
})

const logout = (data) => ((dispatch)=>{
    dispatch(isPosting(true));
    APIClient.post("/user/logout", data).then((response)=>{
        if(response.status == 200) {
            dispatch({
                type: LOGOUT,
                payload: data
            });
            showToast(response.data.message, "success");
        } else {
            dispatch(isPosting(false));
            showToast(response.data.message, "error");
        }
    }).catch((error)=>{
        dispatch(isPosting(false));
        showToast(error, "error");
        console.log({error});
    })
})

export {
    login,
    signup,
    fetchUser,
    logout
};