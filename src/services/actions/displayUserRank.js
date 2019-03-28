import history from 'helpers/history';
import * as actionTypes from './actionTypes';

const pickUser = values => ({
  type: actionTypes.PICK_USER,
  payload: {
    id: values.id,
    firstName: values.firstName,
    lastName: values.lastName,
    image_url: values.image_url,
    city: values.city,
    elo: values.elo,
  },
});

const updatePageAttribute = (attributeName, newValue) => ({
  type: actionTypes.UPDATE_PAGE_ATTRIBUTE,
  valueName: attributeName,
  value: newValue,
});

export const resetUserRankList = () => ({
  type: actionTypes.RESET_USER_RANK_LIST,
});

export const getUserRankList = (searchParams) => {
  const userList = 'https://gist.githubusercontent.com/Matel001/4223c1def21f27937edd62acecb3def1/raw/1ac6e1e3032396ba1d4c44a51dfbc8dd1fedfb46/userListRank';
  let url = '';

  if (searchParams.toString().length) {
    url = `/ranks?${searchParams.toString()}`;
  } else {
    url = '/ranks';
  }

  return dispatch => fetch(userList)
    .then(response => response.json())
    .then((response) => {
      response.content
        .sort((a, b) => parseInt(b.elo, 10) - parseInt(a.elo, 10))
        .map(value => dispatch(pickUser(value)));
      dispatch(updatePageAttribute('totalPages', response.totalPages));
      history.push(url);
    })
    .catch(error => console.error('ERROR ', error));
};
