import { setCookie } from 'helpers/auth';
import * as actionTypes from './actionTypes';

const requestLogout = () => ({
  type: actionTypes.LOGOUT_REQUEST,
  isToken: true,
});

const recieveLogout = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
  isToken: false,
});

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  setCookie('id_token', '', -1);
  setCookie('id', '', -1);
  dispatch(recieveLogout());
};
