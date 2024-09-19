import React, { useState } from 'react';
import ForgotPassword from './popup/ForgotPassword';
import { LoginForm } from '../assets/style';
import { sha256 } from 'js-sha256';
import data from './../assets/Mock.json';

export default function Login({ onAuthenticated }) {

  const [users] = useState(data.users);
  const [user, setUser] = useState({
    id: null
  });
  const [secondAuth, setSecondAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [af2, setAf2] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    setAf2(code);
    return code;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setUser(users.find(
      user => user.email === email && 
      sha256(user.password) === sha256(password)
    ));
    if (user.id !== null) {
      setSecondAuth(true); 
      alert(`Seu Código de Verificação: ${generateCode()}`);
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  const handleSubmitAf2 = (e) => {
    e.preventDefault(); 

    if (verificationCode === af2.toString()) { 

      onAuthenticated({ id: user.id }); 
      alert("Login bem sucedido")
    } else {
      alert('Código incorreto, tente novamente.');
      alert(`Seu Novo código de Verificação: ${generateCode()}`);
    }
  };

  const showForgotPassword = () => {
    setForgotPassword(!forgotPassword); // Alterna o estado do popup de esqueci minha senha
  };

  return (
    <LoginForm>
      {!secondAuth ? (
        <div>
          {forgotPassword ? (
            <div className="popup">
              <ForgotPassword onClose={showForgotPassword} onVerification={onAuthenticated} />
              <a onClick={showForgotPassword}>Voltar</a>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label>Password</label>
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
            </div>
          )}
        </div>
        
      ) : (
        <div>
          <h2>Segundo Meio</h2>
          <form onSubmit={handleSubmitAf2}>
            <div>
              <label>Código de Verificação</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Verificar Código</button>
            </div>
          </form>
        </div>
      )}
    </LoginForm>
  );
}
