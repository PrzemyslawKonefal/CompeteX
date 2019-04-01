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
    overflow: hidden;
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
    margin: 0;
  }
  
  button, input {
    border: none;
    outline: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
  }
  
  .slider {
    overflow: hidden;
    position: relative;
    height: 280px;
    
    @media screen and (max-width: 478px) {
      overflow: visible;
    }

    .slick-dots {
        bottom: -17px;
        height: 63px;
        left: 40px;
        text-align: left;
        width: 90%;

        li {
            margin: 0;

            button {
                height: 13px;
                width: 13px;
                padding: 0;
                border-radius: 13px;
                background-color: rgba(26, 31, 38, 0.31);

                &::before {
                    content: "";
                }
            }
        }

        .slick-active button {
            background: linear-gradient(270deg, #FF7338 0%, #F54732 100%);
        }
    }
    .slick-list {
      overflow: visible;
    }
    .slick-track {
      padding: 35px 0;
    }
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
