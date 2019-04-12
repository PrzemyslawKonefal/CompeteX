import { createSelector } from 'reselect';
import { initialState } from './reducers/global';

const selectGlobal = state => state.get('global', initialState);

const makeSelectLoaderStatus = () => {
  return createSelector(selectGlobal, homeState => homeState.get('showLoader'));
};

export { selectGlobal, makeSelectLoaderStatus };
