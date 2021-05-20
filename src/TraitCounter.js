import React from 'react'
import './TraitCounter.css'
import { Link } from 'react-router-dom'


export default function TraitCounter (props){
   if (Number(props.length)!== 7) {
            return(
            <button className = "counter">
                {7-props.length} choices remaining 
                </button>

            )
    } else if (Number(props.length) === 7){
      return (
          <Link 
          className = "go"
          to="/main"
          >
              Let's Begin!
          </Link>
     )
    }
} 

//from App:
// <Nav clickPage={this.changePage} />
