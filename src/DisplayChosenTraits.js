//import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'
import Context from './context'
import PropTypes from 'prop-types'
import Trait from './Trait'
import './DisplayChosenTraits.css'


export default class DisplayChosenTraits extends Component{
    static defaultProps = {
        history: {
          goBack: () => { }
        },
        match: {
          params: {}
        }
      }
      static contextType = Context;
      static propTypes = {
        history: PropTypes.object,
        match: PropTypes.object,
        params: PropTypes.object,
      }

    handleAddNote = note => {
        this.setState({
          notes: [
            ...this.state.notes,
            note
          ]
        })
      }
   
    render(){
         console.log(this.context) 
         console.log(this.props.match.params)
     return(
        <main className= 'Chosen-Traits'>
            <header>
                <h1>Be Your Best Self</h1>
                <h3>Learn about your traits</h3>
            </header>
            <div className= 'traits-list'>
                {/* {props.map((trait) =>
                    <Trait 
                    key = {trait.id}
                    id = {trait.id}
                    name={trait.name}
                    tagline={trait.tagline}
                />
                } */}
            </div>
            <footer className = 'reset'>
                <button 
                    type = 'submit'
                    onClick = {(e) => {
                        e.preventDefault();
                        <Link to = "/reset">Reset your Traits </Link>
                    }}
                >
                </button>                    
            </footer>
        </main> 
     )
    }
}