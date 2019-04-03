import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable/dist/immutable';

export const initialState = fromJS({
  showLoader: false
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADER: return state.set('showLoader', action.status);
    default: return state;
  }
};

export default users;
