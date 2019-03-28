import * as actionTypes from './actionTypes';

export const increment = () => ({
  type: actionTypes.INCREMENT,
});

export const toggleLoader = shouldShowLoader => ({
  type: actionTypes.TOGGLE_LOADER,
  loaderVisibility: shouldShowLoader,
});

export const incrementTrigger = () => (dispatch) => {
  dispatch(toggleLoader(true));
  setTimeout(() => {
    dispatch(increment());
    dispatch(toggleLoader(false));
  }, 1500);
};
