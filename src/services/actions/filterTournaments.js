import * as actionTypes from './actionTypes';
import { resetTournaments, getTournaments } from './displayTournaments';

export const updateTournamentsFilterStatus = (
  filterName,
  attributeName,
  newValue,
) => ({
  type: actionTypes.UPDATE_TOURNAMENTS_FILTERS_STATUS,
  filter: filterName,
  valueName: attributeName,
  value: newValue,
});

export const updateTournamentsFilterLink = params => ({
  type: actionTypes.UPDATE_TOURNAMENTS_FILTER_LINK,
  searchParams: params,
});

export const resetTournamentsFilters = () => ({
  type: actionTypes.RESET_TOURNAMENTS_FILTERS,
});

export const resetTournamentsPagination = () => ({
  type: actionTypes.RESET_TOURNAMENTS_PAGINATION,
});

export const incrementTournamentsPage = () => ({
  type: actionTypes.INCREMENT_TOURNAMENTS_PAGE,
});

export const decrementTournamentsPage = () => ({
  type: actionTypes.DECREMENT_TOURNAMENTS_PAGE,
});

export const getFilteredTournaments = (searchParams) => {
  searchParams = searchParams.toString();

  const pagination = searchParams.substring(
    searchParams.indexOf('page', searchParams.lenght),
  );

  let search = searchParams.substring(0, searchParams.indexOf('page') - 1);
  let url = `${pagination}`;

  return (dispatch) => {
    if (search) {
      search = search.replace(/=|&/g, match => (match === '=' ? ':' : ','));
      url = `${pagination}&search=${search}`;
    }

    dispatch(resetTournaments());
    dispatch(getTournaments(url));
  };
};
