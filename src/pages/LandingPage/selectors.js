import { createSelector } from 'reselect';
import { initialState } from '../../services/reducers/users';

const selectUsers = state => state.get('users', initialState);

const makeSelectUsers = () => {
  return createSelector(selectUsers, homeState => homeState.get('users'));
};

export { selectUsers, makeSelectUsers };
