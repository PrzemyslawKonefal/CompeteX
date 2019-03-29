import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

const initialState = fromJS({
  users: []
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USERS: return state.set('users', action.users);
    default: return state;
  }
};

export default users;
