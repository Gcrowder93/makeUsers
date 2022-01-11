import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMessage,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{errorMessage}</h3>
      <div className="form-controls">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" />
    </form>
  );
}
