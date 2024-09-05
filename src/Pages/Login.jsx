import React, { useState } from 'react';

export default function Login({param}){


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Verifica se as credenciais estão corretas
        if (email && senha) {
          const values = {email, senha}
          param(values)
        }else{
          setErro("Está faltando um campo");
      };

    return (
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
    );
  }
}