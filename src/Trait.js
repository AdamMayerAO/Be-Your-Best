import React from 'react';
import './Trait.css'

export default function Trait(props){
   
    return(
        <div className = 'Trait'>
            <label >
                <h4 className = 'title'>{props.trait.name}</h4>
                <p>{props.trait.tagline}</p>   
                <button
                    style={{backgroundColor: props.chosen ? "green" : "whitesmoke"}}
                    type='checkbox'
                    className='choose-trait'
                    onClick={() => props.onClick(props.trait)}
                >
                    {props.chosen ? "Chosen" : "Choose"} this Trait
                </button>        
            </label>
        </div>
    )
}
