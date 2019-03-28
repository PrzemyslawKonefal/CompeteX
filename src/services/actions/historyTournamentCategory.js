import * as actionTypes from './actionTypes';

export const fetchHistoryTournamentUsers = tournamentId => (dispatch) => {
  const usersLink = 'https://rawgit.com/PrzemyslawKonefal/46094dd3eecfbe75d4d9ade9412671e2/raw/d40887e5f2f4b75a40bd61bedac5077284196b43/tournamentUsers.json';
  fetch(usersLink)
    .then(response => response.json())
    .then(response => dispatch(insertHistoryTournamentUsers(response, tournamentId)))
    .catch(error => console.error(`Error: ${error}`));
};

export const resetHistoryTournamentsList = () => ({
  type: actionTypes.RESET_HISTORY_TOURNAMENTS_LIST,
});
export const toggleHistoryUsersLoad = () => ({
  type: actionTypes.TOGGLE_HISTORY_USERS_LOAD,
});

export const fetchHistoryTournamentsList = (page = 0, filters) => {
  const tournamentsUrl = (() => {
    switch (filters.status) {
      case 'PLANNING':
        return 'https://rawgit.com/PrzemyslawKonefal/5b1a11b97957ce161b7a606f4af2a84e/raw/bdd74047dd7739b1e5556e521ee17fe20ab04f0a/historyTournament.json';
      case 'COMPLETED':
        return 'https://rawgit.com/PrzemyslawKonefal/d0cc929c6ed1e97f6c663c9f0656573f/raw/4735d25ffb30c956f89bdd264c93ebe9cf561234/historyTournamentCompleted.json';
      case 'PRIVATE':
        return 'https://rawgit.com/PrzemyslawKonefal/5b1a11b97957ce161b7a606f4af2a84e/raw/bdd74047dd7739b1e5556e521ee17fe20ab04f0a/historyTournament.json';
      default:
        return '';
    }
  })();
    /** gonna be `/tournaments?
     page=${page}
     &sort=id
     &search=state%${filters.status}
    &search=city%${filters.city !== 'ALL' && filters.city}
     ,desc` * */
  return (dispatch) => {
    dispatch(TemporarilyDisableHistoryTournamentsLoad());
    fetch(tournamentsUrl)
      .then(response => response.json())
      .then(response => dispatch(insertHistoryTournamentsList(response.content, response.last)))
      .catch(error => console.log('ERROR: ', error));
  };
};

export const changeHistoryContainerFocus = focusedContainerIndex => ({
  type: actionTypes.CHANGE_HISTORY_CONTAINER_FOCUS,
  focusIndex: focusedContainerIndex,
});

export const changeHistoryFilter = filterName => ({
  type: actionTypes.CHANGE_HISTORY_FILTER,
  filter: filterName,
});

const insertHistoryTournamentUsers = (response, tournamentId) => ({
  type: actionTypes.INSERT_HISTORY_TOURNAMENT_USERS,
  id: tournamentId,
  users: response,
});

const insertHistoryTournamentsList = (tournaments, lastPage) => ({
  type: actionTypes.INSERT_HISTORY_TOURNAMENTS,
  tournamentsList: tournaments,
  isLastPage: lastPage,
});

const TemporarilyDisableHistoryTournamentsLoad = () => ({
  type: actionTypes.DISABLE_HISTORY_LOAD,
});
