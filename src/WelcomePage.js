import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import logo from './logo.jpg'
import {Link} from 'react-router-dom';
import {fetchUserTraits} from "./redux/actions/traits";
import './Login.css'

const WelcomePage = (props) =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserTraits((traits)=>{
            if(traits.length){
                props.history.push("/home");
            } else {
                props.history.push("/reset")
            }
        }));
    }, []);

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