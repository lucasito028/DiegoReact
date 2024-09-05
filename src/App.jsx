import data from './assets/Mock.json';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { sha256 } from 'js-sha256';

export default function App() {
  
  const [users] = useState(data.users);
  const [autenticado, setAutenticado] = useState(false);
  const [session, setSession] = useState('');

  const login = (params) => {
    const user = users.find(user => user.username === params.username && 
      sha256(user.password) === sha256(params.password));
    
    if (user) {
      setAutenticado(true);
      setSession(sha256(user.id))
      return true;
    } else {
      alert('Usuário ou senha incorretos'); 
      return null;
    }
    };

  // JSX para renderização condicional
  return (
    <div className="App">
      {
        !autenticado ? (
          <Login onLogin={login}  />
        ) : (
          <Home session={session} />
        )
      }
    </div>
  );
}