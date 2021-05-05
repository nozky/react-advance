import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
import reducer from './reducer'

// default value of the state
const defaultState ={
  people:data,
  isModalOpen:false,
  modalContent:'Hello World'
}

const Index = () => {

  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit =(e)=> {
    e.preventDefault();

    if(name){
      // showModal(true)
      // setPeople([...people,{id: new Date().getTime().toString(), name: name}])
      // setName('')

      // catch this in reducer function, this will trigger reducer functions.
      const newItem ={id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newItem})
      setName('')
    }else{
      // showModal(true)
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal =()=>{
    dispatch({type: 'CLOSE_MODAL'})
  }

  return <>
    <h1>useReducer</h1>
    {state.isModalOpen && <Modal modalContent ={state.modalContent} closeModal ={closeModal} />}
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button className='btn' type='submit'>Submit</button>
    </form>
    {state.people.map((person)=> {
      return(
        <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button className='btn' onClick={()=>{
            dispatch({type: 'REMOVE_ITEM', payload: person.id})
          }}>Remove</button>
        </div>
      )
    })}

  </>
};

export default Index;
