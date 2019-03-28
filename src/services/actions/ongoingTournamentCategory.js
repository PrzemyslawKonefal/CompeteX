import * as actionTypes from './actionTypes';

export const fetchOngoingTournamentUsers = tournamentId => (dispatch) => {
  const usersLink = 'https://rawgit.com/PrzemyslawKonefal/46094dd3eecfbe75d4d9ade9412671e2/raw/d40887e5f2f4b75a40bd61bedac5077284196b43/tournamentUsers.json';
  fetch(usersLink)
    .then(response => response.json())
    .then(response => dispatch(insertOngoingTournamentUsers(response, tournamentId)))
    .catch(error => console.error(`Error: ${error}`));
};

export const resetOngoingTournamentsList = () => ({
  type: actionTypes.RESET_ONGOING_TOURNAMENTS_LIST,
});
export const toggleOngoingUsersLoad = () => ({
  type: actionTypes.TOGGLE_ONGOING_USERS_LOAD,
});

export const fetchOngoingTournamentsList = (page = 0 /* , filters */) => {
  const tournamentsResponse = (() => {
    switch (page) {
      case 0:
        return 'https://rawgit.com/PrzemyslawKonefal/cbb8c8e9794eb0420fc7df40622c432c/raw/0269bb49db5fe9fc3e595293c958132cb9e462a9/tournamentsList.json';
      case 1:
        return 'https://rawgit.com/PrzemyslawKonefal/16ec3b8fc14143728aa3de9733943ae3/raw/a979dee77a55dcd0c87b2b4ba0668ff9280a08bc/tournamentsList2.json';
      case 2:
        return 'https://rawgit.com/PrzemyslawKonefal/3234067abe38743690621a2a9681724a/raw/571c019e41ec442182d84141ae6ea2e48b2a490b/tournamentsList3.json';
      default:
        return '';
    }
  })();
    // gonna be `/tournaments?
    // page=${page}
    // &sort=id
    // &search=state%${filters.status}
    // &search=city%${filters.city !== 'ALL' && filters.city}
    // ,desc`

  return (dispatch) => {
    dispatch(TemporarilyDisableOngoingTournamentsLoad());
    fetch(tournamentsResponse)
      .then(response => response.json())
      .then(response => dispatch(insertOngoingTournamentsList(response.content, response.last)))
      .catch(error => console.log('ERROR: ', error));
  };
};

export const changeOngoingContainerFocus = focusedContainerIndex => ({
  type: actionTypes.CHANGE_ONGOING_CONTAINER_FOCUS,
  focusIndex: focusedContainerIndex,
});

const insertOngoingTournamentUsers = (response, tournamentId) => ({
  type: actionTypes.INSERT_ONGOING_TOURNAMENT_USERS,
  id: tournamentId,
  users: response,
});

const insertOngoingTournamentsList = (tournaments, lastPage) => ({
  type: actionTypes.INSERT_ONGOING_TOURNAMENTS,
  tournamentsList: tournaments,
  isLastPage: lastPage,
});

const TemporarilyDisableOngoingTournamentsLoad = () => ({
  type: actionTypes.DISABLE_ONGOING_LOAD,
});
