import * as actionTypes from './actionTypes';
import { updateResponseStatus } from './displayTournaments';

export const fetchTournament = tournamentInfo => ({
  type: actionTypes.FETCH_TOURNAMENT,
  tournamentBody: tournamentInfo,
});

export const startTournament = (/* tournamentId */) => (dispatch) => {
  const startTournamentUrl = 'https://jsonplaceholder.typicode.com/posts'; // gonna be `/tournaments/${tournamentId}/bracket`
  fetch(startTournamentUrl, {
    method: 'post',
  })
    .then((response) => {
      if (response.status === 200) { dispatch(updateResponseStatus('startSuccess')); } else { dispatch(updateResponseStatus('startFailure')); }
    })
    .catch(() => {
      dispatch(updateResponseStatus('failure'));
    });
};

export const insertTournamentUsers = (usersList, tournamentId) => ({
  type: actionTypes.INSERT_TOURNAMENT_USERS,
  id: tournamentId,
  list: usersList,
});

export const insertTournamentMatches = matchesList => ({
  type: actionTypes.INSERT_TOURNAMENT_MATCHES,
  list: matchesList,
});
