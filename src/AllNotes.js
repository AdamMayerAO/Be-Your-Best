//search field
//local nav bar on the left with all the folders.  By each folder, how many notes are in that folder
//main- list display of all the notes in the chosen folder, or that came up with the search
//-the notes that come up in the search need to have teh folder they belong to written before the name
//the note should be displayed with the folder, the type and the first line of the content.
//the user should be able to click on the note to expand it to see all the content, then have the options to edit, delete, (share?)
//there should also be an *add note* button that would load the Create-A-Note form from '/home' 
//GET allNotes 
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Homepage.css'
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'
import ALLTRAITS from './traits-data'
import DisplayNotes from './DisplayNotes'
import './AllNotes.css'

const AllNotes = () =>{
    
    const folders  = ALLTRAITS.map(folder => folder.name)
    
    return(
        <div>
            <header>
                <h2> My Notes</h2>
                <form className = 'search-bar'>
                    <div>
                    <label htmlFor="search">Search My Notes</label><br/>
                    <input type="text" name='search' id='search' placeholder='search' />
                    </div>

                    <button 
                    type='submit'
                    
                    >Search</button>
               

                </form>
            </header>
            <div className = 'notes'>
                <div >
                    <ul className= 'folders-list'>
                    {folders.map(folder => <li>{folder}</li>)}
                    </ul>    
                </div>  
            <div className = 'displayNotes'>
                <DisplayNotes></DisplayNotes>
            </div>
            
            <Link className='home' to = 'home'>Home</Link>

            </div>
        </div>
    )
}
export default AllNotes;