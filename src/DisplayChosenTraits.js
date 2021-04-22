//import { render } from '@testing-library/react'
import React from 'react'
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {resetTraits} from "./redux/actions/traits";
import './DisplayChosenTraits.css'
import Trait from './Trait'
//clicking on a trait will take you to the /notes route and open the folder with the name of the trait clicked on
//each trait just has its name, on:hover can display the tagline
    
const DisplayChosenTraits = (props) => {
  const dispatch = useDispatch();
  const traits = useSelector((state)=>state.traitsReducer.userTraits);

    
    const handleAddNote = note => {
        this.setState({
          notes: [
            ...this.state.notes,
            note
          ]
        })
    }

    const handleResetTraits = () =>{
      dispatch(resetTraits());
      props.history.push("/reset");
    }

     return(
        <main className= 'Chosen-Traits'>
            <header className = 'chosen'>
                <h1>Be Your Best Self</h1>
                <h3>Learn about your traits</h3>
            </header>
            <Link to='/home'> Home </Link>
            <div className= 'traits-list'>
                {
                  traits.map((trait)=>(
                    <Trait 
                      key = {trait.id}
                      id = {trait.id}
                      trait={trait}
                    />
                  ))
                } 
            </div>
            <footer className = 'reset'>
                <button
                className = "reset"
                onClick = {handleResetTraits}
                >
                Reset your Trait Choices
                </button>
                
        
                                  
            </footer>
        </main> 
     )
}

export default DisplayChosenTraits;