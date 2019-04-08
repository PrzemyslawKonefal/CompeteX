import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { viewTraining, likeTraining } from '../../services/actions/trainings';
import { Wrapper } from './styles';
import { makeSelectTrainings } from './selectors';
import { Workout } from '../../components';

function Trainings({trainings, onGetTrainings}) {
  const workouts = trainings.map(training => (
    <Workout workout={training} key={training.id}/>
  ));

  return (
    <Wrapper>
      {workouts}
    </Wrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  trainings: makeSelectTrainings()
});

const mapDispatchToProps = {
  onViewTraining: viewTraining,
  onLikeTraining: likeTraining
};

Trainings.propTypes = {
  trainings: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array
  ]),
  onViewTraining: PropTypes.func,
  onLikeTraining: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
