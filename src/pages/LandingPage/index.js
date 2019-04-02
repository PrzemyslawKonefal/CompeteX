import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getUsers, filterUsers } from '../../services/actions/users';
import { USER_FILTERS } from '../../helpers/constants';
import sliderSettings from './sliderSettings';
import { Wrapper, Header } from './styles';
import { SlideTrigger, UserListItem, SingleSelect } from '../../components';

class LandingPage extends Component {
  state = {
    selectedFilter: ''
  };

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
    document.onkeydown = ({key}) => {
      if (key === 'ArrowRight') { this.ongoingSlider.slickNext(); }
      if (key === 'ArrowLeft') { this.ongoingSlider.slickPrev(); }
    };
  }

  handleFilterChange = ({target}) => {
    const shouldRevertArray = this.state.selectedFilter === target.value;
    if (shouldRevertArray) { this.props.filterUsers(); }
    else {
      this.setState({ selectedFilter: target.value });
      this.props.filterUsers(target.value, this.state.selectedFilter);
    }
    this.ongoingSlider.slickGoTo(0);
  }

  render() {
    const { users } = this.props;
    const { selectedFilter } = this.state;
    const usersComponents = users.map(user => (
      <UserListItem user={user} key={user.email} />
    ))
    return (
      <Wrapper>
          <Header>
            <div>
              <p>Nie przegap tej rywalizacji</p>
              <h2>Bohaterowie</h2>
            </div>
            <SingleSelect
              options={USER_FILTERS}
              label="Sortuj"
              defaultEmpty
              selected={selectedFilter}
              change={this.handleFilterChange}
            />
          </Header>
          <Slider {...this.ongoingSettings} {...sliderSettings}>
            {usersComponents}
          </Slider>
          <Header>
            <div>
              <p>Nie przegap tej rywalizacji</p>
              <h2>Treningi</h2>
            </div>
          </Header>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.get('users'),
});

const mapDispatchToProps = {
  getUsers,
  filterUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
