import React, {Component} from 'react';
import traits from './traits-data';
import Trait from './Trait';
//import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
//import DisplayChosenTraits from './DisplayChosenTraits'
import TraitCounter from './TraitCounter'
import Context from './context'
import './ChooseTraits.css'
let traitsChosen = []
let traitIds = []
export default class ChooseTraits extends Component{
  // static defaultProps = {
  //     match: {
  //       params: {}
  //     }
  //   }
  //   static contextType = Context;
  //   static propTypes = {
  //     match: PropTypes.object,
  //     params: PropTypes.object,
  //   }
  state = {
    checkedTraits: [],
  };

  handleCheckTrait = (trait) => {
    if(traitsChosen.length<7){  
        if(traitIds.includes(trait.id)){
            let updatedTraitsIds = traitIds.filter(id => id!==trait.id)
            let updatedTraitsChosen = traitsChosen.filter(choice => choice !==trait)
            traitIds = updatedTraitsIds;
            traitsChosen = updatedTraitsChosen;
            this.setState({
                checkedTraits: updatedTraitsChosen
            })
        } 
        else {
          traitIds.push(trait.id)
          traitsChosen.push(trait)
        }
        this.setState({
          checkedTraits: traitsChosen
        })
        
      }
  }
  
  render() {
    // console.log(this.state.checkedTraits)
    const value = {
      traits: this.state.checkedTraits
    }
    return (
      <Context.Provider value={value}>
        
      <main className='App'>
          <header className='App-header'>
            <h1>Be Your Best Self!</h1>
            <h2>Choose your Traits</h2>
            <p>Look through the list and choose 7 traits that Be Your Best will help you keep in mind</p>
            <TraitCounter
            length = {this.state.checkedTraits.length} />
          </header>
          <div  className='App-list'>
            {traits.map(trait => (
              <Trait 
                key = {trait.id}
                id = {trait.id}
                trait={trait}
                chosen={this.state.checkedTraits.includes(trait)}
                onClick = {this.handleCheckTrait}
              />
            ))}
          </div>
      </main>
      </Context.Provider>
    );
  }
}

// handleResetTraits = () => {
//   this.setState({
//     traits: [
//       ...this.state.traits, 
//       trait
//     ]
//   })
// }
// style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}