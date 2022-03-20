import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  ul {
    list-style:none;
  }
`;

export default GlobalStyle;
