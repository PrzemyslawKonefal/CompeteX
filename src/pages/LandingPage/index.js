import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Tabs } from '@material-ui/core';
import { Event, DirectionsBike, FilterList as Filter } from '@material-ui/icons';

import { Trainings } from '../index';
import { getUsers, filterUsers } from '../../services/actions/users';
import { getTrainings } from '../../services/actions/trainings';
import { USER_FILTERS, TRAINING_SORTS } from '../../helpers/constants';
import sliderSettings from './sliderSettings';
import { Wrapper, Header, StickyHeader, Tab } from './styles';
import { SlideTrigger, UserListItem, SingleSelect } from '../../components';
import { makeSelectTrainingsSort, makeSelectUsers } from './selectors';

function LandingPage({ users, onGetUsers, onFilterUsers, activeSort, onGetTrainings }) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [ongoingSlider, setOngoingSlider] = useState(null);
  const [tabValue, setTabValue] = useState('Trainings');
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
  const activeTab = tabValue === 'Trainings'
    ? <Trainings />
    : null;

  function handleFilterUsersChange({ target }) {
    const shouldRevertArray = selectedFilter === target.value;
    if (shouldRevertArray) {
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

  function handleSortTrainings({ target }) {
    onGetTrainings(0, target.value);
  }

  useEffect(() => {
    if (!users.length) {
      onGetUsers();
      onGetTrainings(0, activeSort);
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
          selected={selectedFilter}
          change={handleFilterUsersChange}
          IconComponent={Filter}
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
            <Tab label="Treningi" value="Trainings" icon={<DirectionsBike />} />
            <Tab label="Wydarzenia" icon={<Event />}/>
          </Tabs>
        </div>
        <SingleSelect
          options={TRAINING_SORTS}
          label="Sortuj"
          selected={activeSort}
          change={handleSortTrainings}
          IconComponent={Filter}
        />
      </StickyHeader>
      {activeTab}
    </Wrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  activeSort: makeSelectTrainingsSort()
});

const mapDispatchToProps = {
  onGetUsers: getUsers,
  onFilterUsers: filterUsers,
  onGetTrainings: getTrainings
};

LandingPage.propTypes = {
  users: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array
  ]),
  activeSort: PropTypes.string,
  onGetUsers: PropTypes.func,
  onSortTrainings: PropTypes.func,
  onFilterUsers: PropTypes.func,
  onGetTrainings: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
