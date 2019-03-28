import * as types from './actionTypes';

export const toggleLoader = (status) => {
  return {
    type: types.TOGGLE_LOADER,
    status
  }
};
