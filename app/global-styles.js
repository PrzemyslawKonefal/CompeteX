import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito');
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Nunito', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
  
  button, input {
    border: none;
    outline: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
  }
`;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#ffcc88',
      main: '#FFC371',
      dark: '#dc9f71',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff717c',
      main: '#FFFFFF',
      dark: '#dc5a68',
      contrastText: '#fff',
    },
  },
});

export const DefaultTheme = createMuiTheme(theme);

export default GlobalStyle;
