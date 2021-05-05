import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

   const checkSize = ()=> {
    setSize(window.innerWidth) 
   }


  useEffect(()=>{
    console.log('Use Effect - use effect')
    window.addEventListener('resize',checkSize)

      //Clean up function
      return ()=> {
      console.log('CleanUp -use effect')
      window.removeEventListener('resize',checkSize)
    }
  })

  return (
    <>
      <h1>useEffect cleanup</h1>;
      <h2>Windows Size</h2>
      <h3>Width px: {size}</h3>
    </>
  )
};

export default UseEffectCleanup;
