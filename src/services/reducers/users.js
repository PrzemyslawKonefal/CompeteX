import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'
import { dataStringToNumber } from '../../helpers/functions';

const initialState = fromJS({
  users: [],
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USERS: return state.set('users', action.users);
    case types.FILTER_USERS:
      let sortedUsers = state.get('users');
      let x = [...sortedUsers];
      switch (action.filter) {
        case 'Ostatnia aktywność': {
          sortedUsers = sortedUsers.sort((a, b) => {
            const valA = dataStringToNumber(a.lastActive);
            const valB = dataStringToNumber(b.lastActive);
            return valB - valA;
          });
          break;
        }
        case 'Liczba treningów': {
          sortedUsers = sortedUsers.sort((a, b) => {
            return b.workoutsNumber - a.workoutsNumber
          });
          break;
        }
        case 'Alfabetycznie': {
          sortedUsers = sortedUsers.sort((a, b) => {
            const valA = `${a.firstName} ${a.lastName}`;
            const valB = `${b.firstName} ${b.lastName}`;
            return valA.localeCompare(valB);
          });
          break;
        }
        default: sortedUsers = sortedUsers.map((e, i, a) => a[(a.length -1) -i]);
      }
      return state.set('users', sortedUsers);
    default: return state;
  }
};

export default users;
