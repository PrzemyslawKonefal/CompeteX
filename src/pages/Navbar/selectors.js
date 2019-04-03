import { createSelector } from 'reselect';
import { initialState } from '../../services/reducers/auth';

const selectAuth = state => state.get('auth', initialState);

const makeSelectUserData = () => {
  return createSelector(selectAuth, homeState => homeState.get('userData'));
};

export { selectAuth, makeSelectUserData };
