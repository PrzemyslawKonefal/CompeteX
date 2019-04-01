import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getUsers } from 'services/actions/users';
import sliderSettings from './sliderSettings';
import { SlideTrigger, UserListItem } from '../../components';

const Wrapper = styled.div`
  padding: 25px;
  
  @media screen and (max-width: 600px) {
    padding: 25px 0;
  }
`;

const Header = styled.header`
  min-width: 200px;
  padding-left: 40px;
  border-bottom: 1px solid rgba(26,31,38,0.1);

  p {
      margin-bottom: 4px;
      opacity: 0.5;
      color: #1A1F26;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.11px;
      line-height: 16px;
  }
  h2 {
      position: relative;
      margin: 0 40px 5px 0;
      color: #1A1F26;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 1px;
      line-height: 32px;
  }
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
        <Header>
          <p>Don&apos;t miss them</p>
          <h2>ONGOING</h2>
        </Header>
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
