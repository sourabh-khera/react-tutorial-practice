import React, { Component } from 'react';
import AuthContext from '../Context/context';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

import classes from './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Sourabh', age: 26 },
        { id: 2, name: 'Sahil', age: 28 },
        { id: 3, name: 'Puneet', age: 30 },
      ],
      showPersons: false,
      authenticated: false,
      title: props.title,
    }
  };

  static getDerivedStateFromProps(props, state){  //creation && updating
    console.log('App js state from props called');
     return null;
  }

  componentDidMount(){ //creation
    console.log('App.js DidMount called')
  }
  
  // shouldComponentUpdate(){ updating phase
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProp, prevState){
  //   return null
  // }

  // componentDidUpdate(prevProp, prevState, snapshot){
    
  // }
 
  // componentWillUnmount(){  destoying phase
     
  // }

  buttonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  
  deleteHandler = (id) => {
    const tempPersons = [...this.state.persons];
    const deleteIndex = tempPersons.findIndex(p => p.id === id);
    tempPersons.splice(deleteIndex, 1);
    this.setState({persons: tempPersons});
  }
  
  nameHandler = (event, id) => {
    const tempPersons = [...this.state.persons];
    const index = tempPersons.findIndex(p => p.id === id);
    tempPersons[index].name = event.target.value;
    this.setState({persons: tempPersons});
  }
  
  handleLogin = () => {
   this.setState({authenticated: true});
  }
  
  render() {
    let renderPersons = [];
    renderPersons = this.state.showPersons ? 
    (
      <Persons persons={this.state.persons} click={this.deleteHandler} change={this.nameHandler} />
    )
    : [];

    return (
      <AuthContext.Provider value={{authenticated: this.state.authenticated}}>  
        <div className={classes.App}>
          <Cockpit 
            click={this.buttonHandler}
            showPersons={this.state.showPersons}
            loginHandler={this.handleLogin}
            heading={this.state.title}
          />
          {renderPersons}
        </div>
      </AuthContext.Provider> 
    );
  }
}

export default App;
