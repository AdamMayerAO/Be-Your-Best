import React, {useState} from 'react'
import NoteForm from './NoteForm'
import BybError from './BybError';
import ValidationError from './ValidationError'
import {useDispatch, useSelector} from 'react-redux';
import ALLTRAITS from './traits-data'


const AddNote = (props) => {
    const traits = useSelector((state)=>state.traitsReducer.traits);
    const [content, setContent] = useState("")
   
    const updateNoteType = (name) => {
        // this.setState({ 
        //     name:{
        //         value: name, 
        //         touched: true 
        //     } 
        // })   
    }
   
    const updateContent = (text) =>{
       setContent(text)
    }

    
    const validateContent = (contentText) => {
        if (!content) {
        return "Please enter content for your note";
        }
    }

   

    const handleSubmit = (e) =>{
       e.preventDefault()
        console.log("submitted")
        
    //         const newNote = {
    //             title: e.target['note-type'].value,
    //             contents: e.target['note-content'].value,
    //             folder: e.target['note-folder-id'].value,
    //         }
    //   return newNote
    }
//
    //     fetch(`${config.API_ENDPOINT}/notes`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newNote),
    //     })
    //     .then(res =>{
    //         if(!res.ok)
    //             return res.json().then(e=>Promise.reject(e))
    //         return res.json()
    //     })
    //     .then(note => {
    //         this.context.addNote(note)
    //         this.props.history.push(`/folders/${newNote.folder}`)
    //     })
    //     .catch(error =>{
    //         console.error({error})
    //     })
    // }        
   
    return(
        <section className = 'AddNote'>
            <h2>Create a Note</h2>
            <BybError>
            <NoteForm onSubmit = {handleSubmit}>
                <div className = 'field'>
                    <label htmlFor ='note-type-input'>
                        Note Type
                    </label>
                    <select id='note-type' name='note-type'>
                        <option value = 'PersonalChallenge'>Personal Challenge</option>
                        <option value = 'Question'>Question</option>
                        <option value = 'Observation'>Observation</option>
                        <option value = 'Comment'>Comment</option>  
                    </select>
                </div>
                <div className = 'field'>
                    <label htmlFor ='note-content-input'>
                        Content
                    </label>
                    <textarea id='note-content-input' name='note-content' onChange={e => updateContent(e.target.value)}/>
                    <ValidationError message = {validateContent()}/>

                </div>
                <div className = 'field'>
                    <label htmlFor= 'note-folder-select'>
                        Folder
                    </label>
                    <select id ='note-folder-select' name='note-folder-id'>
                        <option value={props.dailyTrait.name}>{props.dailyTrait.name}</option>
                        {ALLTRAITS.map(folder =>
                            <option key={folder.id} value={folder.name}>
                            {folder.name}
                            </option>
                        )}

                    </select>

                </div>
                <div className = 'buttons'>
                    <button 
                        type = 'submit'
                        disabled={
                            validateContent()
                        }
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