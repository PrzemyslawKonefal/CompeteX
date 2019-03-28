import axios from 'axios'
import * as types from './actionTypes';

import { toggleLoader } from './global';
import { users } from '../../helpers/mocks';

function storeUsers(users) {
  return {
    type: types.STORE_USERS,
    users
  };
};

export const getUsers = () => {
  return dispatch => {
    dispatch(toggleLoader(true));
    axios.get("/products")
      .then((response) => {
        if (response.status === 201) {
          dispatch(storeUsers(response.data.content));
        } else {
          dispatch(storeUsers(users));
        }
        dispatch(toggleLoader(true));
      })
      .catch(() => {
        dispatch(storeUsers(users));
        dispatch(toggleLoader(false));
      })
  };
}
