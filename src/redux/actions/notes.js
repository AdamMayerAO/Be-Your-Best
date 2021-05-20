import APIClient from "../../services";
import {
    showToast
} from "../../utils";
import {
    ADD_NOTE,
    REMOVE_NOTE,
    EDIT_NOTE,
    IS_FETCHING_NOTES,
    FETCHED_NOTES,
    SEARCH_NOTES
} from "../constants";

const isFetchingNotes = (status) => {
    return ({
        type: IS_FETCHING_NOTES,
        payload: status
    });
}

const fetchNotes = (onSuccess=()=>{}) => (
    (dispatch) => {
        dispatch(isFetchingNotes(true));
        APIClient.get("/notes/all").then((response)=>{
            if(response.status == 200) {
                console.log("\n\n Notes: ", response.data.notes, "\n\n");
                dispatch({
                    type: FETCHED_NOTES,
                    payload: response.data.notes
                });
                onSuccess(response.data.notes);
            } else {
                dispatch(isFetchingNotes(false));
                showToast(response.data.message, "error");
            }
        }).catch((error)=>{
            dispatch(isFetchingNotes(false));
            showToast(error, "error");
            console.log({error});
        })
    }
)

const fetchNotesByFolder = (data, onSuccess=()=>{}) => (
    (dispatch) => {
        dispatch(isFetchingNotes(true));
        APIClient.post("/notes/by-folder", data).then((response)=>{
            if(response.status == 200) {
                console.log("\n\n Notes: ", response.data.notes, "\n\n");
                dispatch({
                    type: FETCHED_NOTES,
                    payload: response.data.notes
                });
                onSuccess(response.data.notes);
            } else {
                dispatch(isFetchingNotes(false));
                showToast(response.data.message, "error");
            }
        }).catch((error)=>{
            dispatch(isFetchingNotes(false));
            showToast(error, "error");
            console.log({error});
        })
    }
)

const searchNotes = (data, onSuccess=()=>{}) => (
    (dispatch) => {
        dispatch(isFetchingNotes(true));
        APIClient.post("/notes/search", data).then((response)=>{
            if(response.status == 200) {
                console.log("\n\n Search Notes Result: ", response.data.notes, "\n\n");
                dispatch({
                    type: SEARCH_NOTES,
                    payload: response.data.notes
                });
                onSuccess(response.data.notes);
            } else {
                dispatch(isFetchingNotes(false));
                showToast(response.data.message, "error");
            }
        }).catch((error)=>{
            dispatch(isFetchingNotes(false));
            showToast(error, "error");
            console.log({error});
        })
    }
)

const addNote = (data) => (
    (dispatch) => {
        APIClient.post("/notes/add-note", data).then((response)=>{
            if(response.status === 201) {
                dispatch({
                    type: ADD_NOTE,
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

const removeNote = (data) => (
    (dispatch) => {
        APIClient.post("/notes/remove-note", data).then((response)=>{
            if(response.status === 200) {
                dispatch({
                    type: REMOVE_NOTE,
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

const editNote = () => (
    (dispatch) => {
        dispatch({
            type: EDIT_NOTE
        });
    }
)

export {
    addNote,
    removeNote,
    fetchNotes,
    fetchNotesByFolder,
    editNote,
    searchNotes
};