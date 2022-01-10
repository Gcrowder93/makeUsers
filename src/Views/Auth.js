import React, { useState } from 'react';
import classnames from 'classnames';
import AuthForm from '../Components/AuthForm';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('you done fucked up');
    }
  };
  return (
    <div>
      <div classnames="section">
        <h1
          onClick={() => {
            setType('Sign In');
          }}
          className={classnames({ active: type === 'signin' })}
        >
          Sign In
        </h1>
        <h1
          onClick={() => {
            setType('Sign Up');
          }}
          className={classnames({ active: type === 'signup' })}
        >
          Sign Up
        </h1>
      </div>
      <p> {type} </p>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
