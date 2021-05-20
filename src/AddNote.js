import React, {useEffect, useState} from 'react'
import NoteForm from './NoteForm'
import BybError from './BybError';
//import ValidationError from './ValidationError'
import {useDispatch, useSelector} from 'react-redux';
import ALLTRAITS from './traits-data'
import {addNote} from './redux/actions/notes'
import {fetchFolders} from './redux/actions/folders'

//after clicking "add Note, I want the Notes page to load"

const AddNote = (props) => {
    const dispatch = useDispatch();
    const folders = useSelector((state)=>state.foldersReducer.folders);
    const isFetchingFolders = useSelector((state)=>state.foldersReducer.isFetchingFolders);
    const [noteType, setNoteType] = useState("PersonalChallenge");
    const [contents, setContents] = useState("");
    const [folderId, setFolderId] = useState(null);

    useEffect(()=>{
        if(!folders.length) {
            dispatch(fetchFolders());
        } else {
            if(props.dailyTrait.hasOwnProperty("name")) {
                const folder = folders.filter(f=>f.name.toLowerCase()===props.dailyTrait.name.toLowerCase());
                if(folder.length) {
                    setFolderId(folder[0].id);
                } 
            } else {
                setFolderId(folders[0].id);
            }
        }
    }, [folders, props.dailyTrait.name]);


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submitted")
        
        const newNote = {
            noteType,
            contents,
            folderId
        };
        console.log({newNote})
        dispatch(addNote(newNote))
        window.alert("Note Added!")
        document.getElementById("AddNote").reset();

    }        
   
    return(
        <section className = 'AddNote'>
            <h2>Create a Note</h2>
            <BybError>
            <NoteForm id = "AddNote" onSubmit={handleSubmit}>
                <div className = 'field'>
                    <label htmlFor ='note-type-input'>
                        Note Type
                    </label>
                    <select
                        onChange={e => setNoteType(e.target.value)}
                        id='note-type' name='note-type'
                    >
                        <option selected={noteType==='PersonalChallenge'} value='PersonalChallenge'>Personal Challenge</option>
                        <option selected={noteType==='Question'} value='Question'>Question</option>
                        <option selected={noteType==='Observation'} value='Observation'>Observation</option>
                        <option selected={noteType==='Comment'} value='Comment'>Comment</option>  
                    </select>
                </div>
                <div className = 'field'>
                    <label htmlFor ='note-content-input'>
                        Content
                    </label>
                    <textarea required id='note-content' name='note-content' onChange={e => setContents(e.target.value)}/>

                </div>
                <div className = 'field'>
                    <label htmlFor= 'note-folder-select'>
                        Folder
                    </label>
                    <select
                        id ='note-folder-select' name='note-folder-id'
                        onChange={e => setFolderId(e.target.value)}
                    >
                        {folders.map(folder =>
                            <option selected={folder.id===folderId} key={folder.id} value={folder.id} >
                                {folder.name}
                            </option>
                        )}

                    </select>

                </div>
                <div className = 'buttons'>
                    <button 
                        type = 'submit'
                    >
                        Add note
                    </button>
                </div>
            </NoteForm>
            </BybError>
        </section>
        )
}
export default AddNote;