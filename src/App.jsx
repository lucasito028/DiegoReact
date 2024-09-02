import './assets/Mock.json'

import React, { useEffect, useState } from 'react';
import Login from './Pages/Login'
import Home from './Pages/Home'

// Função principal do componente
function App() {
  // Estados para o formulário e a autenticação
  const [params, setparams] = useState({username: '', password: ''});
  const [autenticado, setAutenticado] = useState(false);

  const login = (params) = {

  }
  // JSX para renderização
  return (
    <div className="App">
      {!autenticado ? (
        <Login param={login}/>
      ) : (
        <Home/>
      )}
    </div>
  );
}

export default App;

