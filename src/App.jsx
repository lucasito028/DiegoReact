import './App.css'


import React, { useState } from 'react';

// Função principal do componente
function App() {
  // Estados para o formulário e a autenticação
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [erro, setErro] = useState('');

  // Dados a serem exibidos na tabela
  const dados = [
    { id: 1, nome: 'José' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'João' },
  ];

  // Função para lidar no envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Credenciais válidas
    const emailValido = 'adm@email.com.br';
    const senhaValida = '123adm';

    // Verifica se as credenciais estão corretas
    if (email === emailValido && senha === senhaValida) {
      setAutenticado(true);
      setErro('');
    } else {
      setErro('Credenciais inválidas');
      setAutenticado(false);
    }
  };

  // JSX para renderização
  return (
    <div className="App">
      {!autenticado ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
          {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
      ) : (
        <div>
          <h2>Dados</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;

