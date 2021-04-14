import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from "./redux";
import BybError from './BybError'
import './App.css';
import Login from './Login'
import ChooseTraits from './ChooseTraits'
import DisplayChosenTraits from './DisplayChosenTraits'
import Homepage from './Homepage'
import Notes from './AllNotes'

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div className ='AppRoute'>
          <Router>
              <Route
                path = '/reset'
                component = {ChooseTraits}
              />
              <Route 
                path = '/login'
                component = {Login}
              />
              <Route 
                path = '/main'
                component ={DisplayChosenTraits}
              />
              <Route
                path = '/home'
                component = {Homepage}
              />
              <Route 
              path = '/notes'
              component = {Notes}
              ></Route>
          </Router>
            
        </div>
      </Provider>
    ) 
    

  }
}  


export default App;


      // <BybContext.Provider value={value}>
      // <div className = 'App'>  
      //     <BybError>
      //       <nav className = 'AppNav'>
      //         {this.renderNavRoutes()}
      //       </nav>
      //     </BybError>
        
        
      //   </div>
      // </BybContext.Provider>

      // state = {
      //   checkedTraits: [],
      // };
    
      // handleResetTraits = trait => {
      //   this.setState({
      //     traits: [
      //       ...this.state.traits, 
      //       trait
      //     ]
      //   })
      // }
      // handleCheckTrait = (trait) => {
      //   if(traitsChosen.length<13){  
      //     if(traitIds.includes(trait.id)){
      //         traitIds.filter(id => id!==trait.id)
      //         traitsChosen.filter(choice => choice !==trait)
      //         this.setState({
      //           checkedTraits: traitsChosen
      //         })
      //       } 
      //       else 
      //       {
      //         traitIds.push(trait.id)
      //         traitsChosen.push(trait)
      //       }
          
      //       this.setState({
      //         checkedTraits: traitsChosen
      //       })
      //     }
      //     this.handleClick()
      // }
    
    
      // handleClick = () => {
      //   let choices = traitsChosen.length
      //   if (choices == 13){
      //     <DisplayChosenTraits
      //         key = {this.state.id}
      //         id = {this.state.id}
      //         name={this.state.name}
      //         tagline={this.state.tagline}
      //     />
      //   }
      // }
      // handleAddNote = note => {
      //   this.setState({
      //     notes: [
      //       ...this.state.notes,
      //       note
      //     ]
      //   })
      // }