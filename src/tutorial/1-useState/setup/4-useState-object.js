import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Peter',
    age: '24',
    message: 'Random Message'
  })


  const changeHandler = ()=> {
    setPerson({...person, message: 'Hello World'})
  }

  return (
   <React.Fragment>
     <h1>useState object example</h1>
     <h3>{person.name}</h3>
     <h3>{person.age}</h3>
     <h3>{person.message}</h3>
     <button className='btn' onClick={changeHandler} >Change</button>
   </React.Fragment> 
  )
}

export default UseStateObject;
