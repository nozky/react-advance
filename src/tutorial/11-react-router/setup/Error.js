import React from 'react';
import { Link } from 'react-router-dom';

// navbar
import Navbar from './Navbar'; //testing...

const Error = () => {

  return (
    <div>
      <h1>Error Page</h1>
       {/* <Navbar />  */}
      <Link className='btn' to='/'>Back Home</Link>
    </div>
  );
};

export default Error;
