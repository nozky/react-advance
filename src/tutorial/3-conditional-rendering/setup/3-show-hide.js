import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false)


  return (
    <React.Fragment>
      <h1>show/hide</h1>
      <button className="btn" onClick={()=> setShow(!show)} >Show/Hide</button>
      {show && <Item />}
    </React.Fragment>
  )
};

const Item = ()=> {

  const [size, setSize] = useState(window.innerWidth)

  useEffect(()=>{
     window.addEventListener('resize',()=> setSize(window.innerWidth)) 
    //  Clean up function
    return ()=>{
      window.removeEventListener('resize',()=> setSize(window.innerWidth))
    }
  },[])

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  )
}  

export default ShowHide;
