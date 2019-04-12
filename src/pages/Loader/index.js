import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import TriangeLoad from 'react-loader-spinner';
import Logo from '../../assets/Logo.svg';
import connect from 'react-redux/es/connect/connect';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoaderStatus } from '../../services/selectors';

const fadeOut = keyframes`
  0% {
    opacity: 1;
    z-index:100;
  }
  99% {
    opacity: 0.01;
    z-index:100;
  }
  100% {
    opacity: 0;
    z-index:-100;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.8);
  z-index: ${props => props.visible ? 100 : -100};
  top: 0;
  animation-name: ${props => props.visible ? 'none' : fadeOut};
  opacity: ${props => props.visible ? 1 : 0};
  animation-duration: 1.5s;
  animation-timing-function: initial;
`;

function Loader({showLoader}) {
  const [triggered, setTriggered] = useState(false);
  return (
    <Wrapper visible={showLoader} small={triggered} onClick={() => setTriggered(!triggered)}>
      <TriangeLoad color="#90ee02" width={200} heigth={200} type="Triangle" />
    </Wrapper>
  );
}

Loader.propTypes = {
  showLoader: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  showLoader: makeSelectLoaderStatus()
});

export default connect(mapStateToProps)(Loader);
