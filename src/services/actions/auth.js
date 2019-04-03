import * as types from './actionTypes';

export const login = (status) => {
  return {
    type: types.TOGGLE_LOADER,
    status
  }
};
