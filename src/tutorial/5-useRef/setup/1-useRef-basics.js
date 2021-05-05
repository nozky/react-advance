import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refNameText = useRef(null)

  const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(refNameText.current.value)
  }

  useEffect(()=>{
    refNameText.current.focus()
  })

  return <>
    <h1>useRef</h1>
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' ref={refNameText}/>
      <button className='btn' stype='submit'>Submit</button>
    </form>
  </>;
};

export default UseRefBasics;
