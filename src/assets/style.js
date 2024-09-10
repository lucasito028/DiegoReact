import styled from 'styled-components';

export const AppStyle = styled.div`
  font-family: 'Arial, sans-serif';
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  margin: 0;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;  /* Faz os itens ficarem um embaixo do outro */
  justify-content: center; /* Centraliza o conteúdo dentro da coluna */
  align-items: center;   

  div{
  display: flex;
  flex-direction: column;  /* Faz os itens ficarem um embaixo do outro */   
  }
`;