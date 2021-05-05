import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] =useState([])

  const handleSubmit = (e)=> {
    e.preventDefault();
    
    if(firstName && email){
      const newPerson = {
        id: new Date().getTime().toString(),
        firstName, 
        email
      }

      setPeople((prevState)=>([...prevState,newPerson]))
      setFirstName('')
      setEmail('')
    }
  }

  return <>
    <article>
      <h1>Form</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type='submit'>Submit Person</button>
      </form>

      <div>
        <ListItem people={people}/>
      </div>
    </article>
  </>;
};

const ListItem =({people})=> {
  return(
    <>
      <ul>
        {people.map(person=>{
          const {id,firstName,email} = person
          return(
            <li className='item' key={id} >
              First Name: {firstName}  Email: {email}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ControlledInputs;
