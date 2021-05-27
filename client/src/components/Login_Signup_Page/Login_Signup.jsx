/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';

const Login_Signup = (props) => {
  const { createUser, userLogin } = useContext(APIContext);

  const [onLoginPage, setOnLoginPage] = useState(true);

  const switchPage = () => {
    setOnLoginPage(!onLoginPage);
  };

  return (
    <div className='login'>
      {onLoginPage
       ? <div className='loginBox'>
          <button className='btn switch_login_signup' type="button" onClick={() => {switchPage()}}>
            New User? Sign Up Here!
          </button>
          <h3>Login</h3>
          <form onSubmit={(e) => {userLogin(e); setTimeout(() => {props.changeView('pantryList')}, 500)}}>
            <label className='loginItem' htmlFor="username">
              <input className='input' type='text' id="username" name="username" placeholder='username' required />
            </label>
            <label className='loginItem' htmlFor="password">
              <input className='input' type='password' id="password" name="password" placeholder='password' required />
            </label>
            <button className='btn fill' type="submit">Log In</button>
          </form>
        </div>
      : <div className='loginBox'>
          <button className='btn switch_login_signup' type="button" onClick={() => switchPage()}>
            Have an account? Log In Here!
          </button>
          <h3>Sign Up</h3>
          <form onSubmit={(e) => {createUser(e); setTimeout(() => {props.changeView('pantryList')}, 500)}}>
            <label className='loginItem' htmlFor="username">
              <input className='input' type='text' id="username" name="username" placeholder='username' required />
            </label>
            <label className='loginItem' htmlFor="password">
              <input className='input' type='password' id="password" name="password" placeholder='password' required />
            </label>
            <button className='btn fill' type="submit">Sign Up</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Login_Signup;









