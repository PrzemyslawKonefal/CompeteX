import axios from 'axios';
import * as types from './actionTypes';

import { toggleLoader } from './global';
import { trainingsMock } from '../../helpers/mocks';
import { TRAINING_SORTS } from '../../helpers/constants';
import { translateSorts } from '../../helpers/functions';

function storeTrainings(trainings, page, sort) {
  return {
    type: types.STORE_TRAININGS,
    trainings,
    page,
    sort
  };
}

function setTrainingLike(id) {
  return {
    type: types.SET_TRAINING_LIKE,
    id
  };
}

export const getTrainings = (page = 0, sortName) => (dispatch) => {
  console.log(sortName);
  dispatch(toggleLoader(true));
  const sort = translateSorts(sortName);
  const link = `/workouts?page=${page}${sort ? `&sort=${sort}` : ''}`;
  axios.get(link)
    .then((response) => {
      if (response.status === 201) {
        dispatch(storeTrainings(response.data.content, page, sortName));
      } else {
        dispatch(storeTrainings(trainingsMock, page, sortName));
      }
      dispatch(toggleLoader(true));
    })
    .catch(() => {
      dispatch(storeTrainings(trainingsMock, page, sortName));
      dispatch(toggleLoader(false));
    });
};

export const viewTraining = (id) => {
  const viewedWorkoutsString = localStorage.getItem('alreadyViewedWorkoutsOnDevice');
  const viewedWorkoutsList = viewedWorkoutsString.split('#');
  if (!viewedWorkoutsList.some(workoutId => workoutId === id)) {
    axios.patch(`/workouts/${id}/view`)
      .then(() => {
        localStorage.setItem('alreadyViewedWorkoutsOnDevice', `${viewedWorkoutsString}#${id}`);
      });
  }
};

export const likeTraining = id => (dispatch) => {
  const viewedWorkoutsString = localStorage.getItem('alreadyViewedWorkoutsOnDevice');
  const viewedWorkoutsList = viewedWorkoutsString.split('#');
  if (!viewedWorkoutsList.some(workoutId => workoutId === id)) {
    axios(`/workouts/${id}/like`, {
      method: 'PATCH',
      headers: { Authorization: 'blabla' }
    })
      .then(() => {
        dispatch(setTrainingLike(id));
      });
  }
};
