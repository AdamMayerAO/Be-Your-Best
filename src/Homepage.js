import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Homepage.css'
import { Link} from 'react-router-dom'
import AddNote from './AddNote';
import {fetchUserTraits} from "./redux/actions/traits";
import {logout} from "./redux/actions/auth";
import {setJwtTokenInHeaders} from "./services";


const Homepage = (props) => {
    const dispatch = useDispatch();
    const traits = useSelector((state)=>state.traitsReducer.userTraits);
    const [dailyTrait, setDailyTrait] = useState({});

    useEffect(()=>{
        if(!traits.length) {
            dispatch(fetchUserTraits((traits)=>{
                if(!traits.length) {
                    props.history.push("/reset");
                }
            }));
        }
    }, []);

    useEffect(()=>{
        if(traits.length){
            const traitDetails = JSON.parse(localStorage.getItem('dailyTrait'));
            if (!traitDetails || traitDetails.timestamp < new Date()){
                const dT = traits[getRandomIntInclusive(0,6)];
                const data = {
                    ...dT,
                    timestamp: new Date(new Date().setHours(23,59,59,0))
                };
                localStorage.setItem('dailyTrait', JSON.stringify(data));
                setDailyTrait(dT);
            } else{
                delete traitDetails["timestamp"];
                setDailyTrait(traitDetails); 
                console.log({traitDetails});
            }
        }
    }, [traits]);

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);  
    }

    const handleOnPressLogout = () => {
        localStorage.removeItem("accessToken");
        setJwtTokenInHeaders(null);
        dispatch(logout());
    }
   
    return(
        <div>
            <div
                onClick={handleOnPressLogout}
                style={{float: "right", margin: 20, cursor: "pointer"}}
            >
                <b>Logout</b>
            </div>
            <header className = 'todayHeader'>
                <h1>Today is a Good Day for: <br/>
                {dailyTrait?.name}</h1>
                <h3>{dailyTrait?.tagline}</h3>
                <h4>What can you do to have more {dailyTrait?.name} today? </h4>
            </header>
            <body>
                <AddNote dailyTrait = {dailyTrait}>Add a Note</AddNote>
            </body>
            <footer>
                <Link to = 'notes'>See all my Notes</Link><br/>
                <Link to ='main'>See all my Traits</Link><br/>
                <Link to = 'reset'>Reset my Traits</Link>
            </footer>
        </div>
    )
}
export default Homepage;