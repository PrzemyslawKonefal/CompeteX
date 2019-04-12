import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { withSnackbar } from 'notistack';

import { viewTraining, likeTraining } from '../../services/actions/trainings';
import { Wrapper } from './styles';
import { makeSelectTrainings } from './selectors';
import { Workout } from '../../components';

function Trainings({trainings, myId = 22, enqueueSnackbar, onLikeTraining}) {
  const workouts = trainings.map(training => (
    <Workout
      key={training.id}
      workout={training}
      workoutClick={handleWorkoutClick}
      likeClick={handleLikeClick}
      tableClick={handleTableClick}
      myId={myId}
    />
  ));

  function handleLikeClick(id) {
    if (!myId) {
      enqueueSnackbar('Only logged in users can like workouts!', { variant: 'warning' } );
    } else {
      onLikeTraining(id, myId);
    }
  }
  function handleTableClick(id) {

  }
  function handleWorkoutClick(id) {

  }

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
  onLikeTraining: PropTypes.func,
  enqueueSnackbar: PropTypes.func,
  myId: PropTypes.number
};

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(Trainings));
