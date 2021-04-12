import React, {useState} from 'react';
import allTraits from './traits-data';
import Choose from './Choose';
import {useDispatch, useSelector} from 'react-redux';
import TraitCounter from './TraitCounter';
import "./ChooseTraits.css";
import { addTrait, removeTrait } from './redux/actions/traits';

const ChooseTraits = (props) => {
  const dispatch = useDispatch();
  const traits = useSelector((state)=>state.traitsReducer.traits);

  const handleCheckTrait = (trait) => {
    
    if(traits.filter((t)=>t.id===trait.id).length) {
      dispatch(removeTrait({trait}));
    } else if(traits.length<7) {
      dispatch(addTrait({trait}));
    }
  }

    return (
      <main className='App'>
          <header className='App-header'>
            <h1>Be Your Best Self!</h1>
            <h2>Choose your Traits</h2>
            <p>Look through the list and choose 7 traits that Be Your Best will help you keep in mind</p>
          </header>
          <div>
            <TraitCounter
            length = {traits.length} />
          </div>
          <div className='App-list'>
            {allTraits.map(trait => (
              <Choose
                key = {trait.id}
                id = {trait.id}
                trait={trait}
                chosen={traits.filter((t)=>t.id===trait.id).length}
                onClick = {handleCheckTrait}
              />
            ))}
          </div>
      </main>
    );
}

export default ChooseTraits;