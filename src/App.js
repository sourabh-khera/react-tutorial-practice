import React, { Component } from 'react';
import Person from './Person/Person';

import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Sourabh', age: 26 },
      { id: 2, name: 'Sahil', age: 28 },
      { id: 3, name: 'Puneet', age: 30 },
    ],
    showPersons: false,
  };
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

  render() {
    let renderPersons = [];
    const btnclass = [classes.button];
    if(this.state.showPersons) {
      renderPersons = this.state.persons.map((p, id) => {
        return <Person
          key={p.id}
          name={p.name}
          age={p.age}
          click={() => this.deleteHandler(p.id)}
          change={(event) => this.nameHandler(event, p.id)}
        />
      });
      btnclass.push(classes.Red)
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button className={btnclass.join(' ')} onClick={this.buttonHandler}>Toggle Person</button>
        {renderPersons}
      </div>
    );
  }
}

export default App;
