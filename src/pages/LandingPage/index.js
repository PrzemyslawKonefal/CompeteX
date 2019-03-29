import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getUsers } from 'services/actions/users';
import sliderSettings from './sliderSettings';

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
    const { users } = this.props;
    return (
      <Wrapper>
        <Slider {...sliderSettings}>
          xaxa
        </Slider>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.get('users'),
});

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
