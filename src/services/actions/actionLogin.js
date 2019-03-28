import { setCookie } from 'helpers/auth';
import * as actionTypes from './actionTypes';

const requestLogin = () => ({
  type: actionTypes.LOGIN_REQUEST,
  isFetching: true,
  isToken: false,
  redirect: false,
  fromReducer: '',
});

const recieveLogin = path => ({
  type: actionTypes.LOGIN_SUCCESS,
  isFetching: false,
  isToken: true,
  redirect: true,
  fromReducer: path,
});

export const loginUser = (path = '/login') => {
  const loginRequestLink = 'https://gist.githubusercontent.com/Matel001/5e9da528f528924ba492944f52b70c63/raw/2c3d9432fcd14da2a2c40e0eb0b042b1df833732/gistfile1.txt';
  return (dispatch) => {
    dispatch(requestLogin());
    return (
      fetch(loginRequestLink)
        // return fetch(`api/login`, {
        // method: "GET",
        // headers: new Headers({'authorization': `Bearer ${getCookie('Token')}`})
        // })
        .then(response => response.json())
        .then((response) => {
          const token = response.Headers.Authorization.split(' ');

          setCookie('id_token', token[1], 15);
          setCookie('id', 5, 15);
          dispatch(recieveLogin(response.path));
        })
        .catch(error => console.error('ERROR ', error))
    );
  };
};
