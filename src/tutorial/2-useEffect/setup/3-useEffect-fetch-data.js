import React, { useState, useEffect, useCallback } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([])

  const getUsers =  useCallback(async ()=> {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users) 
    } catch (error) {
      console.log(error)
    }
  },[url]) 

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <React.Fragment>
      <h1>Fetch Data</h1>
      <h2>GitHub User</h2>
        <ul className='users'>
          {
            users.map((user)=>{
              const {id, login, avatar_url,html_url} = user
              return(
                <li key={id}>
                  <img src={avatar_url} alt={login}/>
                  <div>
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                  </div>
                </li>
              )
            })
          }
        </ul>
    </React.Fragment>
  )
};

export default UseEffectFetchData;
