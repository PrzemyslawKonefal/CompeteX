import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';
import { TRAINING_SORTS } from '../../helpers/constants'

export const initialState = fromJS({
  trainingsList: [],
  activeSort: TRAINING_SORTS[0],
  page: 0,
  toggledLikeIds: []
});

const trainings = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_TRAININGS: return state.merge({
      trainingsList: action.page === 0 ? action.trainings : [...state.get('trainingsList'), ...action.trainings],
      activeSort: action.sort || state.get('activeSort'),
      page: action.page + 1
    });
    case types.SET_TRAINING_LIKE:
      return state.update('toggledLikeIds', toggledLikeIds => toggledLikeIds.push(action.id));
    default: return state;
  }
};

export default trainings;
