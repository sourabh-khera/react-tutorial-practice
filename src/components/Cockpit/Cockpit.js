import React, {useRef, useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnclass = props.showPersons ? classes.Red : '';
  const buttonRef = useRef();
  
  // useEffect(()=>{
  //   buttonRef.current.click();
  // },[]);

 return (
 <div className={classes.Cockpit}>
  <h1>{props.heading}</h1>
  <p>This is really working</p>
  <button ref={buttonRef} className={btnclass} onClick={props.click}>Toggle Person</button>
  <button onClick={props.loginHandler}>Login</button>
 </div>  
 )
}

export default cockpit;