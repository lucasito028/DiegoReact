import styled from 'styled-components';

export const AppStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
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