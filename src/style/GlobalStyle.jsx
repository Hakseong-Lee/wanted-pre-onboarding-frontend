import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  button{
    cursor: pointer;
    outline: none;
    border: none;
  }

  input{
    border: none;
  }
  input:focus-visible {
    outline: 0.01rem solid #007aff;
  }
`;

export default GlobalStyle;
