import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Navbar, LandingPage } from './pages';

import GlobalStyle from './styles/global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
const ContentWrapper = styled.main`
  position: relative;
  top: 64px;
`

export default function App() {
  return (
    <AppWrapper>
      <Navbar />
      <ContentWrapper>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </ContentWrapper>
      <GlobalStyle />
    </AppWrapper>
  );
}
