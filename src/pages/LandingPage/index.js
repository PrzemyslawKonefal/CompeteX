import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { getUsers, filterUsers } from '../../services/actions/users';
import { USER_FILTERS } from '../../helpers/constants';
import sliderSettings from './sliderSettings';
import { Wrapper, Header } from './styles';
import { SlideTrigger, UserListItem, SingleSelect } from '../../components';
import { makeSelectUsers } from './selectors';

function LandingPage({ users, onGetUsers, onFilterUsers}) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [ongoingSlider, setOngoingSlider] = useState(null);
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
      <Header>
        <div>
          <p>Nie przegap tej rywalizacji</p>
          <h2>Treningi</h2>
        </div>
      </Header>
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
