import React, { useState, useEffect } from 'react';

// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    value >= 1? document.title =`New Messages ${value}` : document.title ='No new Message'
  },[value]) //dependency array

  useEffect(()=>{
    console.log('Should run once')
  },[])

  console.log('Render component')
  return (
    <React.Fragment>
      <h1>useEffect Basics</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={()=>{
        setValue((prevState) => {return prevState + 1})        
      }}>Add</button>
    </React.Fragment>
  )
};

export default UseEffectBasics;
