import React, { useState } from 'react';

const UseStateBasics = () => {

  //  console.log(useState('Hello World'))
  //  console.log(useState('Hello World')[0])
  //  console.log(useState('Hello World')[1])

   const [text,setText] = useState('Hello World')
   
   const handleClick = ()=> {
    text === 'Hello World'? setText('Hello Earth') : setText('Hello World') 
   }



  return (
    <React.Fragment>
      
        {true? <h1>useState basic example</h1> : <h1>False</h1>}
        <h2>{text}</h2>
        <button className='btn' onClick={handleClick}>Random Title</button>
    
    </React.Fragment>
  );
};

export default UseStateBasics;
