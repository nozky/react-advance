import React,{useState} from 'react';
import { data } from '../../../data';

const newPerson = {
  id: 5,
  name: 'Panoy'
}

const UseStateArray = () => {

  const [people, setPeople] = useState(data)

  const addPerson = ()=> {
      // setPeople((prevState)=> ([...prevState,newPerson]) )
      setPeople((prevState)=>{ return [...prevState,newPerson] })
  }

  const delHandler = (id)=> {
    const newPeople = people.filter( person => person.id !== id )
    setPeople(newPeople)
  }

  return (
    <React.Fragment>
      <h1>useState array example</h1>
      <ul>
        {
          people.map((person) => {
            const {id, name} = person
            return(
             <React.Fragment key={id}>
               <div className="item">
                <li className='item'>ID: {id} {name}</li>
                <button className='btn' onClick={()=> delHandler(id)} >Delete</button>
               </div>
             </React.Fragment>
            )
          })
        }
      </ul>
      <button className='btn' onClick={()=>{ setPeople([]) }} >Clean Items</button>
      <button className='btn' onClick={addPerson } >Add Person</button>
    </React.Fragment>
  );
};

export default UseStateArray;
