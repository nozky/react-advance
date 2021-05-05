import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  
  const [people, setPeople] = useState([])

  const [newPerson, setNewPerson] = useState({
    firstName: '',
    age: '',
    email: ''
  })

  const handleChange =(e)=> {
    setNewPerson({...newPerson, [e.target.name]: e.target.value, id: new Date().getTime().toString()})    
  }

 const handleSubmit = (e)=> {
  e.preventDefault()
  if(newPerson.firstName && newPerson.age && newPerson.email){
    // setPeople((prevState)=> [...prevState, newPerson])
    setPeople([...people,newPerson])
  }else{
    alert('Form cannot be empty')
  }
 }

  return (
    <>
      <article>
        <h1>Multiple inputs</h1>
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={newPerson.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={newPerson.age}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={newPerson.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type='submit'>add person</button>
        </form>

        <ListItem people={people}/>

      </article>
    </>
  );
};


const ListItem =({people})=> {
  return(
    <>
      <ul>
        {people.map(person=>{
          const {id,firstName,age,email} = person
          return(
            // <li className='item' key={id} >
            // ID: {id} <br/>
            //   First Name: {firstName}<br/>
            //   Age: {age}<br/>
            //   Email: {email}
            // </li>
            <div className="item">
              <h4>{firstName}</h4>
              <h4>{age}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </ul>
    </>
  )
}


export default ControlledInputs;
