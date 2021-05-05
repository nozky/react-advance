import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {

  const [person, setPerson] =useState([])
  const { id } = useParams()
  
  useEffect(()=>{
    const newPerson = data.find((person)=> person.id === parseInt(id))
    setPerson(newPerson)
  },[])

  return (
    <div>
      <h1>Person</h1>
      <h2>ID: {person.id}- {person.name}</h2>
      <Link className='btn' to="/people">Go Back To People</Link>
    </div>
  );

};

export default Person;
