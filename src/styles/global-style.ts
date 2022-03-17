import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
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
