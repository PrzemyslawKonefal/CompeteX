import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getUsers } from 'services/actions/users';
import sliderSettings from './sliderSettings';
import { SlideTrigger } from '../../components'
import UserListItem from '../../components/UserListItem';

const Wrapper = styled.div`
  padding: 25px;
`;

class LandingPage extends Component {

  ongoingSettings = {
    ref: (slider) => { this.ongoingSlider = slider; },
    nextArrow: <SlideTrigger
      direction="left"
      hidden={false}
      buttonClick={() => this.ongoingSlider.slickPrev()}
    />,
    prevArrow: <SlideTrigger
      direction="right"
      hidden={false}
      buttonClick={() => this.ongoingSlider.slickNext()}
    />,
  };

  componentDidMount() {
    const { getUsers, users } = this.props;
    if (!users.length) {
      getUsers();
    }
  }

  render() {
    const { users } = this.props;
    const usersComponents = users.map(user => (
      <UserListItem user={user} key={user.email} />
    ))
    return (
      <Wrapper>
        <Slider {...this.ongoingSettings} {...sliderSettings}>
          {usersComponents}
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
