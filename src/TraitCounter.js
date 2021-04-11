import React from 'react'
import './TraitCounter.css'
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'


export default function TraitCounter (props){
   if (Number(props.length)!== 7) {
            return(
            <button className = "counter">
                {7-props.length} choices remaining 
                </button>

            )
    } else if (Number(props.length) === 7){
      return (
          <button 
          className = "go"
          onClick = {(e) => {
            e.preventDefault();
            <Link to="/display-chosen-traits">Display Chosen Traits</Link>
          }
          }//Go to the home page
          >
              Let's Begin!
          </button>
     )
    }
} 

//from App:
// <Nav clickPage={this.changePage} />
