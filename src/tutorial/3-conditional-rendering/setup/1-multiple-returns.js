import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default user')

  useEffect(()=>{
    fetch(url)
      .then( res => {
        if(res.status < 400){
          return res.json()
        }else{
          setIsLoading(false)
          setIsError(true)
          throw new Error(res.statusText)
        }
      })
      .then( user => {
        setUser(user.login)
        setIsLoading(false)
      })
      .catch( error => console.log(error))
  },[])

  if(isLoading){ 
    return (
      <>
        <h1>Multiple Returns</h1>
        <h2>Loading...</h2>
      </>
    )
   }

   if(isError){ 
    return (
      <>
        <h1>Multiple Returns</h1>
        <h2>Error...</h2>
      </>
    )
   }

   return(
     <>
      <h1>Multiple REturns</h1>
      <h2>Username: {user}</h2>
     </>
   )
  
};

export default MultipleReturns;
