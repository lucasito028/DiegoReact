import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { AppStyle } from './assets/style';
import { sha256 } from 'js-sha256';

export default function App() {

  const [autenticado, setAutenticado] = useState(() => {
    return localStorage.getItem('autenticado') === 'true';
  });
  const [session, setSession] = useState(() => {
    return localStorage.getItem('session') || '';
  });
  const [pageTitle, setPageTitle] = useState(() => {
    return localStorage.getItem('pageTitle') || 'Login';
  });

  // Função de login
  const login = (params) => {
    
    if (params) {

      setAutenticado(true);
      setSession(sha256(params.id));
      setPageTitle('Home');

      localStorage.setItem('pageTitle', 'Home');
      localStorage.setItem('autenticado', 'true');
      localStorage.setItem('session', sha256(params.id));
      return true;

    } else {
      alert('Usuário ou senha incorretos');
      return null;
    }
  };

  useEffect(() => {
    if (autenticado) {
      document.title = pageTitle;
      
      const sessionTimeout = setTimeout(() => {
        setAutenticado(false);
        setSession('');

        localStorage.removeItem('pageTitle');
        localStorage.removeItem('autenticado');
        localStorage.removeItem('session');
        alert('Pode Sair');
      }, 15000); 

      return () => clearTimeout(sessionTimeout); 
      
    }
  }, [autenticado, pageTitle]);

  return (
    <AppStyle>
      {
        !autenticado ? (
          <Login onAuthenticated={login} /> 
        ) : (
          <Home session={session} />
        )
      }
    </AppStyle>
  );
}
