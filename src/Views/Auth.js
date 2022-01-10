import React, { useState } from 'react';
import AuthForm from '../Components/AuthForm';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
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
      <h1
        onClick={() => {
          setType('signin');
        }}
      >
        Sign In
      </h1>
      <h1
        onClick={() => {
          setType('signup');
        }}
      >
        Sign Up
      </h1>
      <h1> Type: {type}</h1>
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
