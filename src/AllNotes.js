//search field
//local nav bar on the left with all the folders.  By each folder, how many notes are in that folder
//main- list display of all the notes in the chosen folder, or that came up with the search
//-the notes that come up in the search need to have teh folder they belong to written before the name
//the note should be displayed with the folder, the type and the first line of the content.
//the user should be able to click on the note to expand it to see all the content, then have the options to edit, delete, (share?)
//there should also be an *add note* button that would load the Create-A-Note form from '/home' 
//GET allNotes 
import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Homepage.css'
import { Link } from 'react-router-dom'
import ALLTRAITS from './traits-data'
import DisplayNotes from './DisplayNotes'
import './AllNotes.css'
import {fetchFolders} from './redux/actions/folders';
import {fetchNotesByFolder, searchNotes} from './redux/actions/notes';

const AllNotes = () =>{
    const dispatch = useDispatch();
    const folders = useSelector((state) =>state.foldersReducer.folders);
    const notes = useSelector((state)=>state.notesReducer.notes);
    const isFetchingNotes = useSelector((state)=>state.notesReducer.isFetchingNotes);
    const isFetchingFolders = useSelector((state)=>state.foldersReducer.isFetchingFolders);
    const [activeFolder, setActiveFolder] = useState("");
    const [keyword, setKeyword] = useState("")


    useEffect(() => {
        dispatch(fetchFolders());
    }, []);

    const handleOnFolderClick = (folderId, folderName) => {
        const data = {folderId};
        console.log({data});
        setActiveFolder(folderName);
        dispatch(fetchNotesByFolder(data));
    }
    const searchAllNotes = () =>{
        dispatch(searchNotes({keyword}))
    }
  
    return(
        <div>
            <header>
                <h2> My Notes</h2>
                <div>
                <label htmlFor="search">Keyword Search - Search My Notes</label><br/>
                <input type="text" name='search' id='search' placeholder='search' value = {keyword} onChange = {(e)=>setKeyword(e.target.value)} />
                </div>

                <button onClick ={searchAllNotes}>Search</button>
            </header>
            <div className = 'display'>
                <div className = 'folders-list'>
                    <ul >
                        {
                            isFetchingFolders
                                ?
                                    <span style={{margin: 15}}>loading...</span>
                                :
                                    folders.map((folder, idx)=>(
                                        <li className = "folders"onClick={()=>handleOnFolderClick(folder.id, folder.name)} key = {idx}>{folder.name}</li>
                                    ))
                        }
                    </ul>    
                </div>  
                <div className = 'displayNotes'>
                    <DisplayNotes
                        isFetching={isFetchingNotes}
                        notes={notes}
                        folderName = {activeFolder}
                    />
                </div>
            </div>
            
           
            <div>
                <Link className='home' to = 'home'>
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <Link to = '/home'>
                    <button>Would you like to add a note?</button>
                </Link>
            </div>
        </div>
    )
}
export default AllNotes;