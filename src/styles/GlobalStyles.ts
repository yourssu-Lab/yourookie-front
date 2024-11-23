import { createGlobalStyle } from 'styled-components';
import { fonts } from './font.ts'; // fonts 파일을 불러온다.

const GlobalStyles = createGlobalStyle`
  ${fonts}
  * {
    margin: 0;
    padding: 0;
    font-family: Pretendard;
  }
`;

export default GlobalStyles;