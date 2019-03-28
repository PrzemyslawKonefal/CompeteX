import * as types from '../actions/actionTypes';

const initialState = {
  users: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USERS: return {
      ...state,
      users: action.users
    };
    default: return state;
  }
};

export default users;
