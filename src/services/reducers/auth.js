import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable/dist/immutable';

export const initialState = fromJS({
  userData: {}
});

const users = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default users;
