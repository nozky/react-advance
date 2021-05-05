import React, { useState, useContext} from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext()
//two components - provider, consumer


//root component //always use root component as .provider
const PropDrilling = () => {

const [people, setPeople] = useState(data)

  const removePerson =(id)=>{
    setPeople((prevStatePerson)=>{
      return prevStatePerson.filter((person)=>{
        return person.id !== id
      })
    })
  }

  const test = ()=>{
    return 'test function'
  }

  return (
    <PersonContext.Provider value={ {removePerson} }>
      <h2>prop drilling</h2>
      <List people ={people}/>
    </PersonContext.Provider>
  )
};

const List = ({people})=> {
  return(
    <>
      {
        people.map((person)=>{
          const {id, name} = person
          return <SingleItem key={id} {...person}/>  //can be id={id} name={name}  ...etc //destructure
        })
      }
    </>
  )
}

const SingleItem = ({id, name})=> {

  const {removePerson} = useContext(PersonContext)

  return(
    <>
      <div className="item">
        <h4>Single item</h4>
        <p>{id}</p>
        <p>{name}</p>
        <button className='btn' onClick={()=> removePerson(id) } >Remove</button>
      </div>
    </>
  )
}

export default PropDrilling;
