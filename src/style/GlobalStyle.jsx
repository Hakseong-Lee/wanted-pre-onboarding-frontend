import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  button{
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }

  input{
    border: none;
  }
  input:focus-visible {
    outline: 0.15rem solid #1a73e8;
  }
`;

export default GlobalStyle;
