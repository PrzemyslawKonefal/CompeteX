import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderSettings from './sliderSettings';

import { getUsers } from 'services/actions/users';

const Wrapper = styled.div`
  
`;

class LandingPage extends Component {
  componentDidMount() {
    const { getUsers, users } = this.props;
    if (!users.length) {
      getUsers();
    }
  }

  render() {
    return (
      <Wrapper>
        <Slider {...sliderSettings}>
          <div>xsaxsaxsa</div>
          <div>xsaxsaxsa</div>
          <div>xsaxsaxsa</div>
          <div>xsaxsaxsa</div>
          <div>xsaxsaxsa</div>
        </Slider>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
