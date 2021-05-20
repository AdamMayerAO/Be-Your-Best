import React from 'react'
import {Link} from 'react-router-dom'


const DisplayNotes = (props) =>{
    console.log(props)  
    //get folder name by Id
    return(
        <div>
            <h2>{props.folderName} Notes</h2>
            {
                props.isFetching
                    ?
                        <span style={{margin: 20}}>loading...</span>
                    :
                        props.notes.length 
                        ?
                            props.notes.map((note, idx)=>(
                                <ul>
                                    <li><span key = {idx}>{note.contents}</span></li>
                                </ul>
                            ))
                        :   <h3>
                                <Link to = '/home'>
                                    <button>Would you like to add a note?</button>
                                </Link>
                            </h3>
            }
        </div>
    )
}
export default DisplayNotes