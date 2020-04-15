import React from 'react';
import styled from 'styled-components';

// import './Person.css';
const WrapperDiv = styled.div`
    width: 200px;
    padding: 20px;
    text-align: center;
    border: 1px solid #eee;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: 0px 10px 8px #888888;

   @media (min-width: 500px) {
      width: 500px;
    }
  `
const person = (props) => {
  return (
    <WrapperDiv>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}/>
    </WrapperDiv>
  )
};

export default person;