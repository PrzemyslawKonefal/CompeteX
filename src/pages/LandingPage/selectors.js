import { createSelector } from 'reselect';
import { initialState } from '../../services/reducers/users';
import { initialState as initialTrainingsState } from '../../services/reducers/trainings';

const selectUsers = state => state.get('users', initialState);
const selectTrainings = state => state.get('trainings', initialTrainingsState);

const makeSelectUsers = () => {
  return createSelector(selectUsers, state => state.get('users'));
};

const makeSelectTrainingsSort = () => {
  return createSelector(selectTrainings, state => state.get('activeSort'));
};

export { selectUsers, makeSelectUsers, makeSelectTrainingsSort };
