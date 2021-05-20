import APIClient from "../../services";
import {
    showToast
} from "../../utils";
import {
    IS_FETCHING_FOLDERS,
    FETCHED_FOLDERS
} from "../constants";

const isFetchingFolders = (status) => {
    return ({
        type: IS_FETCHING_FOLDERS,
        payload: status
    });
}

const fetchFolders = (onSuccess=()=>{}) => (
    (dispatch) => {
        dispatch(isFetchingFolders(true));
        APIClient.get("/folders/all").then((response)=>{
            if(response.status == 200) {
                console.log("\n\n Folders: ", response.data.folders, "\n\n");
                dispatch({
                    type: FETCHED_FOLDERS,
                    payload: response.data.folders
                });
                onSuccess(response.data.folders);
            } else {
                dispatch(isFetchingFolders(false));
                showToast(response.data.message, "error");
            }
        }).catch((error)=>{
            dispatch(isFetchingFolders(false));
            showToast(error, "error");
            console.log({error});
        })
    }
)

export {
    fetchFolders
};