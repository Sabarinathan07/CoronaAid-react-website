import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
const LoginButton = () => {
  return (
    <Link to='login'>
      <button className='btn'>Login</button>
    </Link>
   );
}
 
export default LoginButton;

