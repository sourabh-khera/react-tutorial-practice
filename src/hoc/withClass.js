import React from 'react';


const withClass = (WrapperComponent) => {
 return (props)=> <WrapperComponent {...props}/>
};

export default withClass;