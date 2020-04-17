import React, { Component, createRef } from 'react';
import Wrapper from '../../../hoc/wrapperComponent';
import AuthContext from '../../../Context/context';

import classes from './Person.css';

const inputElem = createRef();


class Person extends Component {

  componentDidMount(){
    inputElem.current.focus();
  }

  render() {
    const { click, change, name, age, children } = this.props;
    return (
        <Wrapper classes={classes.Person}>
          <AuthContext.Consumer>
            {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
          </AuthContext.Consumer>
          <p onClick={click}>I'm {name} and I am {age} years old</p>
          <p>{children}</p>
          {/* <input ref={(inputElem) => {this.inputElem = inputElem}} type='text' onChange={change} value={name} /> */}
          <input ref={inputElem} type='text' onChange={change} value={name} />
        </Wrapper>
    )
  }
}

export default Person;

//to use context in a class based component, inside a function or lifeCycle method with React 16.6 we can use :-

// static context = AuthContext; to connect component to context object and to use context value = this.context.[value]

//to use in functional components :- const context = React.useContext(AuthContext);