import React, { Component } from 'react';
import styled from 'styled-components';
import Person from './Person/Person';

import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'greenyellow'};
  width: 100px;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${props => props.alt ? 'darkred' : 'forestgreen'};
    color: #fff
  }
`;

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
      // style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <StyledButton alt={this.state.showPersons} onClick={this.buttonHandler}>
          Toggle Person
        </StyledButton>
        {renderPersons}
      </div>
    );
  }
}

export default App;
