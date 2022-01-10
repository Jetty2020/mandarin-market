import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const theme = {
  accent: '#f26e22',
  green: '#079768',
  deepBlue: 'rgb(29, 78, 216)',
  blue: 'rgb(59, 130, 246)',
  red: '#d63031',
  gray: '#767676',
};

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  input {
    all:unset;
  }
  * {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #FAFAFA;
    font-family: 'Noto Sans KR', sans-serif;
    color: #2c2c2c;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  li {
    list-style: none;
  }
`;
