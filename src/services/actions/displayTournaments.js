import history from 'helpers/history';

import * as actionTypes from './actionTypes';

const createTournament = values => ({
  type: actionTypes.CREATE_TOURNAMENT,
  payload: {
    id: values.id,
    title: values.title,
    city: values.city,
    description: values.description,
    eliminationType: values.eliminationType,
    access: values.access,
    startDate: values.startDate,
    maxPlayers: values.maxPlayers,
    state: values.state,
  },
});

const updateTournamentPageAttribute = (attributeName, newValue) => ({
  type: actionTypes.UPDATE_TOURNAMENTS_PAGE_ATTRIBUTE,
  valueName: attributeName,
  value: newValue,
});

export const updateNumberOfElements = num => ({
  type: actionTypes.UPDATE_NUMBER_OF_ELEMENTS,
  numberOfElements: num,
});

export const resetTournaments = () => ({
  type: actionTypes.RESET_TOURNAMENTS_LIST,
});

export const getTournaments = (searchParams) => {
  const gist = 'https://gist.githubusercontent.com/Matel001/74af9bb9d3f3df037a2eab878fec47ec/raw/6ff589fe9363f59d0fd39b23fb2e02f1cfdcc24a/gistfile1.txt';
  let url = '';

  if (searchParams.toString().length) { url = `/tournaments?${searchParams.toString()}`; } else url = '/tournaments';

  return (dispatch) => {
    fetch(gist)
      .then(response => response.json())
      .then((response) => {
        dispatch(updateNumberOfElements(response.numberOfElements));
        response.content.forEach((values) => {
          dispatch(createTournament(values));
          dispatch(
            updateTournamentPageAttribute('totalPages', response.totalPages),
          );
          history.push(url);
        });
      })
      .catch(error => console.error('ERROR: ', error));
  };
};

export const updateResponseStatus = isSuccess => ({
  type: actionTypes.UPDATE_RESPONSE_STATUS,
  succeed: isSuccess,
});

export const joinTournament = (userId, tournamentId) => (dispatch) => {
  const gist = 'https://gist.githubusercontent.com/Matel001/74af9bb9d3f3df037a2eab878fec47ec/raw/6ff589fe9363f59d0fd39b23fb2e02f1cfdcc24a/gistfile1.txt';

  // fetch(`/tournaments/${tournamentId}/users/${userId}`, {
  //   method: 'post',
  //   headers: new Headers({
  //     authorization: `Bearer ${getCookie('Token')}`,
  //     'Content-Type': 'application/json; charset=utf-8'
  //   })
  // })
  fetch(gist)
    .then((response) => {
      response.status === 200
        ? dispatch(updateResponseStatus('success'))
        : dispatch(updateResponseStatus('failure'));
    })
    .catch(() => {
      dispatch(updateResponseStatus('failure'));
    });
};
