import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Tabs } from '@material-ui/core';
import { Event, DirectionsBike } from '@material-ui/icons'

import { getUsers, filterUsers } from '../../services/actions/users';
import { USER_FILTERS } from '../../helpers/constants';
import sliderSettings from './sliderSettings';
import { Wrapper, Header, StickyHeader, Tab } from './styles';
import { SlideTrigger, UserListItem, SingleSelect } from '../../components';
import { makeSelectUsers } from './selectors';

function LandingPage({ users, onGetUsers, onFilterUsers}) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [ongoingSlider, setOngoingSlider] = useState(null);
  const [tabValue, setTabValue] = useState('Treningi');
  const ongoingSettings = {
    ref: (slider) => {
      setOngoingSlider(slider);
    },
    nextArrow: <SlideTrigger
      direction="left"
      hidden={false}
      buttonClick={() => ongoingSlider.slickPrev()}
    />,
    prevArrow: <SlideTrigger
      direction="right"
      hidden={false}
      buttonClick={() => ongoingSlider.slickNext()}
    />
  };
  const usersComponents = users.map(user => (
    <UserListItem user={user} key={user.email}/>
  ));
  const activeTab = tabValue === 'Treningi'
    ? <Trainings />
    : <Events />

  function handleFilterChange({ target }) {
    const shouldRevertArray = selectedFilter === target.value;
    if (shouldRevertArray){
      onFilterUsers();
    } else {
      setSelectedFilter(target.value);
      onFilterUsers(target.value, selectedFilter);
    }
    ongoingSlider.slickGoTo(0);
  }

  function handleTabChange(event, value) {
    setTabValue(value);
  }

  useEffect(() => {
    if (!users.length) {
      onGetUsers();
    }
  }, []);

  useEffect(() => {
    document.onkeydown = ({ key }) => {
      if (key === 'ArrowRight') {
        ongoingSlider.slickNext();
      }
      if (key === 'ArrowLeft') {
        ongoingSlider.slickPrev();
      }
    };
  }, [ongoingSlider]);

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
          change={handleFilterChange}
        />
      </Header>
      <Slider {...ongoingSettings} {...sliderSettings}>
        {usersComponents}
      </Slider>
      <StickyHeader>
        <div>
          <p>Nie przegap tej rywalizacji</p>
          <Tabs
            value={tabValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
          >
            <Tab label="Treningi" value='Treningi' icon={<DirectionsBike />} />
            <Tab label="Wydarzenia" icon={<Event />}/>
          </Tabs>
        </div>
      </StickyHeader>
      {activeTab}
    </Wrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers()
});

const mapDispatchToProps = {
  onGetUsers: getUsers,
  onFilterUsers: filterUsers
};

LandingPage.propTypes = {
  users: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array
  ]),
  onGetUsers: PropTypes.func,
  onFilterUsers: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
