import { createSelector } from 'reselect';
import { initialState } from '../../services/reducers/users';

const selectUsers = state => state.get('trainings', initialState);

const makeSelectTrainings = () => {
  return createSelector(selectUsers, homeState => homeState.get('trainingsList'));
};

export { selectUsers, makeSelectTrainings };
