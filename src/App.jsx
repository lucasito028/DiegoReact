import data from './assets/Mock.json';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { sha256 } from 'js-sha256';

export default function App() {

  const [datas, setDatas] = useState([
    {
        "username": "itolucas",
        "email": "tozim@gmail.com",
        "password": "a1dc0edf33096b81fe74363c83dcb30c2ca269113de53db0bbe5f0664a2e5054",
        "id": "1"
    },
  ]);
  
  const [autenticado, setAutenticado] = useState(false);
  const [session, setSession] = useState('');

  const login = (params) => {
    const user = datas.find(user => user.username === params.username && 
      user.password === sha256(params.password));
    
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
          <Login datas={datas} setDatas={setDatas} onLogin={login}  />
        ) : (
          <Home session={session} />
        )
      }
    </div>
  );
}