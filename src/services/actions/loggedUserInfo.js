import * as actionTypes from './actionTypes';

const setUserInfo = values => ({
  type: actionTypes.GET_USER_INFO,
  payload: {
    id: values.id,
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    image_url: values.image_url,
    city: values.city,
    elo: values.elo,
    username: values.username,
  },
});

export const deleteUserInfo = () => ({
  type: actionTypes.DELETE_USER_INFO,
});

export const getUserInfo = () => {
  const userInfoResponse = 'https://gist.githubusercontent.com/Matel001/0c7cbda1a87a80471f131dd9fa0e0702/raw/ff751bde02abcdf64d96af73af5408860ad15219/gistfile1.txt';
  // fetch(localhost:8090/users/{id})
  return dispatch => fetch(userInfoResponse)
    .then(response => response.json())
    .then((response) => {
      response.content.forEach((values) => {
        dispatch(setUserInfo(values));
      });
    })
    .catch(error => console.error('ERROR: ', error));
};
