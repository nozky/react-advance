import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {


  useEffect(()=>{
    setTimeout(()=>{
      closeModal()
    },10000)
  })

  return <div className='modal'>
    <p>{modalContent}</p>
    <button className='btn' onClick={()=> closeModal()}>Close</button>
  </div>;
};

export default Modal;
