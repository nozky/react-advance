import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  const incValue = ()=> {
    setTimeout(()=>{
      // setValue(value + 1)
      setValue((prevState)=> prevState + 1 )
    },5000)
  }

  return (
    <React.Fragment>
      <h1>useState counter example</h1>
        <section style={{margin: '4rem 0'}} >
          <h2>Regular counter</h2>
          <h1>{value}</h1>
          <button className='btn' onClick ={()=> setValue(value + 1) }>+</button>
          <button className='btn' onClick={()=> setValue(0)}>Reset</button>
          <button className='btn' onClick ={()=> setValue(value - 1)}>-</button>
        </section>

        <section style={{margin: '4rem 0'}} >
          <h2>Complex counter</h2>
          <h1>{value}</h1>
          <button className='btn' onClick ={ incValue }>+</button>
        </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
