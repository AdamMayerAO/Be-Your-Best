import React from 'react'
import logo from './logo.jpg'
import {Link} from 'react-router-dom';
import './Login.css'

const WelcomePage = () =>{
    return(
        <div> 
            <header>
                    <h3 className = 'title'>Be Your Best!</h3>
                    <img className = 'image' src={logo} alt = "logo: decorative letter B"/>
            </header>
            <Link to="/login">
                <button>New Users: Sign Up</button>
            </Link>
            <Link to="/login">
                <button>Returning Users: Log In</button>
            </Link>
        </div>
    )
}
export default WelcomePage