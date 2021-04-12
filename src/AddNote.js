import React, {Component} from 'react'
import NoteForm from './NoteForm'
import BybError from './BybError';
import ValidationError from './ValidationError'
import {useDispatch, useSelector} from 'react-redux';
import ALLTRAITS from './traits-data'


const AddNote = (props) => {
    const traits = useSelector((state)=>state.traitsReducer.traits);

    // const updateNoteType = (name) => {
    //     this.setState({ 
    //         name:{
    //             value: name, 
    //             touched: true 
    //         } 
    //     })   
    // }
    // const updateContent = (content) => {
    //     this.setState({ 
    //         content:{
    //             value: content, 
    //             touched: true 
    //         } 
    //     })   
    // }
   
    const validateName = (textarea) => {
        // const name = this.state.name.value.trim();
        // if (name.length === 0) {
        //   return "Name is required";
        // } else if (name.length < 3) {
        //   return "Name must be at least 3 characters long";
        // }
    }

    const validateContent = (textarea) => {
        // const content = this.state.content.value.trim();
        // if (content.length === 0) {
        //   return "Please enter content for your note";
        // }
    }
   
   

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     const newNote = {
    //         title: e.target['note-name'].value,
    //         contents: e.target['note-content'].value,
    //         folder: e.target['note-folder-id'].value,
    //     }

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
            <NoteForm /*onSubmit = {this.handleSubmit}*/>
                <div className = 'field'>
                    <label htmlFor ='note-name-input'>
                        Name
                    </label>
                    <select id='note-type' name='note-type' onChange={e => this.updateNoteType(e.target.value)}>
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
                    <textarea id='note-content-input' name='note-content' onChange={e => this.updateContent(e.target.value)}/>
                    <ValidationError message = {validateContent()}/>

                </div>
                <div className = 'field'>
                    <label htmlFor= 'note-folder-select'>
                        Folder
                    </label>
                    <select id ='note-folder-select' name='note-folder-id'>
                        <option defaulvalue={props.dailyTrait.name}>{props.dailyTrait.name}</option>
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