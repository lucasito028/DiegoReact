import React, { useState } from 'react';
import ForgotPassword from './popup/ForgotPassword';

export default function Login({ datas, setDatas, onLogin }){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onLogin({ username, password });
  };

  return (
    <div>
      <div>
        <ForgotPassword datas={datas} setDatas={setDatas} onForgetPassword={onLogin}/>
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}