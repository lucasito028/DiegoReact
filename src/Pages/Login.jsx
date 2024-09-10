import React, { useState } from 'react';
import ForgotPassword from './popup/ForgotPassword';
import { LoginForm } from '../assets/style';

export default function Login({ onLogin }){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onLogin({ username, password });
  };

  const showForgotPassword = () => {
    if(forgotPassword == true){
      setForgotPassword(false);
    }else{
      setForgotPassword(true);
    }
  };

  return (
    <LoginForm>
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
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <a onClick={showForgotPassword}>Esqueceu Senha?</a>
        </div>
      </form>

      {forgotPassword && (
        <div className="popup">
          <ForgotPassword onClose={showForgotPassword} onVerification={onLogin} />
        </div>
      )}

    </LoginForm>
  );
}
