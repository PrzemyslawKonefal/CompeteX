import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { Navbar, LandingPage } from './pages';
import { SnackbarProvider } from 'notistack';

import GlobalStyle, { DefaultTheme } from './styles/global-styles';
import Loader from './pages/Loader';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  
  @media screen and (max-width: 600px) {
    padding: 0 8px;
  }
`;
const ContentWrapper = styled.main`
  position: relative;
  top: 64px;
`;

export default function App() {
  return (
    <SnackbarProvider maxSnack={3} preventDuplicate>
      <AppWrapper>
        <Loader/>
        <MuiThemeProvider theme={DefaultTheme}>
          <Navbar />
          <ContentWrapper>
            <Switch>
              <Route path="/" exact component={LandingPage} />
            </Switch>
          </ContentWrapper>
          <GlobalStyle />
        </MuiThemeProvider>
      </AppWrapper>
    </SnackbarProvider>
  );
}
