import React from 'react';
import './Trait.css'

export default function Trait(props){
   
    return(
        <div className = 'Trait'>
            <label >
                <h4 className = 'title'>{props.trait.name}</h4>
                <p>{props.trait.tagline}</p>   
                <button
                    type='submit'
                    className='add-Note'
                >
                </button>        
            </label>
        </div>
    )
}