import data from './assets/Mock.json';
import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { sha256 } from 'js-sha256';
import { AppStyle } from './assets/style';

export default function App() {
  const [users] = useState(data.users);
  const [autenticado, setAutenticado] = useState(() => {
    return localStorage.getItem('autenticado') === 'true';});
  const [session, setSession] = useState(() => {
    return localStorage.getItem('session') || '';});

  // Função de login
  const login = (params) => {
    const user = users.find(user => user.username === params.username && 
      sha256(user.password) === sha256(params.password));
    
    if (user) {
      setAutenticado(true);
      const newSession = sha256(user.id);
      setSession(newSession);

      localStorage.setItem('autenticado', 'true');
      localStorage.setItem('session', newSession);
      return true;
    } else {
      alert('Usuário ou senha incorretos');
      return null;
    }
  };

  useEffect(() => {
    if (autenticado) {
      const sessionTimeout = setTimeout(() => {
        setAutenticado(false);
        setSession('');

        localStorage.removeItem('autenticado');
        localStorage.removeItem('session');
        alert('Pode Sair');
      }, 12000);

      return () => clearTimeout(sessionTimeout); 
    }
  }, [autenticado]);

  // JSX para renderização condicional
  return (
    <AppStyle>
      {
        !autenticado ? (
          <Login onLogin={login} />
        ) : (
          <Home session={session} />
        )
      }
    </AppStyle>
  );
}
