import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Homepage.css'
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'
import AddNote from './AddNote';


const Homepage = () => {
    const traits = useSelector((state)=>state.traitsReducer.traits);
   
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);  
    }
   
   
    const dailyTrait = traits[getRandomIntInclusive(0,6)]
    //  const dailyTrait = {
    //     name: "Order",
    //     tagline: "Stay In Line",
    //  }

    return(
        <div>
            <header className = 'todayHeader'>
                <h1>Today is a Good Day for: <br/>
                {dailyTrait.name}</h1>
                <h3>{dailyTrait.tagline}</h3>
                <h4>What can you do to have more {dailyTrait.name} today? </h4>
            </header>
            <body>
                <AddNote 
                dailyTrait = {dailyTrait}
                >Add a Note</AddNote>
                

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