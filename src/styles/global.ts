import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600&family=Manrope:wght@200&display=swap');
@import url(
'https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&family=Libre+Franklin:wght@300;400;500;600&family=Manrope:wght@200&display=swap'
);

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Libre Franklin', sans-serif;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
    color: ${theme.colors.green};
  }
`;
