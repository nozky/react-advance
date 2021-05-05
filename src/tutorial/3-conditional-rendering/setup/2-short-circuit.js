import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('')
  const [isError,setIsError] = useState(false)

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      <h1>Short Circuit</h1>
      <h2>First Value: {firstValue}</h2>
      <h2>Second Value: {secondValue}</h2>
      <hr></hr>

      {/* && will display the default value if text is not empty */}
      {/* || will display the default value if the text is empty */}
      <h2>{text && 'Welcome'}</h2> 
      <h2> {text || 'Please Login'} </h2>

      <hr></hr>
      <button className='btn' onClick={()=> setIsError((prevState)=> !prevState)}>Error</button>
      <h2>{isError && 'Error...'}</h2>
      <p>{isError ? 'There is an error...' : 'There is no error...'}</p>
    </React.Fragment>
  )

};

export default ShortCircuit;
