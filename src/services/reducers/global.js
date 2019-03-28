import * as types from '../actions/actionTypes';

const initialState = {
  showLoader: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADER: return {
      ...state,
      showLoader: action.status
    };
    default: return state;
  }
};

export default users;
