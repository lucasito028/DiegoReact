import data from './assets/Mock.json';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  // Definir o estado inicial com os dados de usuários do JSON
  const [users] = useState(data.users);
  const [params, setParams] = useState({ username: 'itolucas', password: 'itoito' });
  const [autenticado, setAutenticado] = useState(false);

  // Função de login para autenticação
  const login = (params) => {
    const user = users.find(
      user => user.username === params.username && user.password === params.password
    );
    
    // Verifica se o usuário foi encontrado e define a autenticação
    if (user) {
      setAutenticado(true); // Usuário autenticado
      return user.id;
    } else {
      alert('Usuário ou senha incorretos'); // Retorno para erro de login
      return null;
    }
  };

  // JSX para renderização condicional
  return (
    <div className="App">
      {
        !autenticado ? (
          <Login param={login} />
        ) : (
          <Home />
        )
      }
    </div>
  );
}

export default App;
