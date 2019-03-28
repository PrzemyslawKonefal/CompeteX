import * as actionTypes from './actionTypes';
import { resetUserRankList, getUserRankList } from './displayUserRank';

export const updateUserFilterStatus = (filterName, attributeName, newValue) => ({
  type: actionTypes.UPDATE_USER_FILTER_STATUS,
  filter: filterName,
  valueName: attributeName,
  value: newValue,
});

export const updateFilterLink = params => ({
  type: actionTypes.UPDATE_RANK_FILTER_LINK,
  searchParams: params,
});

export const resetFilters = () => ({
  type: actionTypes.RESET_FILTERS,
});

export const resetPagination = () => ({
  type: actionTypes.RESET_PAGINATION,
});

export const incrementPage = () => ({
  type: actionTypes.INCREMENT_PAGE,
});

export const decrementPage = () => ({
  type: actionTypes.DECREMENT_PAGE,
});

export const getFilteredRank = (searchParams) => {
  searchParams = searchParams.toString();

  const pagination = searchParams.substring(
    searchParams.indexOf('page', searchParams.lenght),
  );

  let search = searchParams.substring(0, searchParams.indexOf('page') - 1);
  let url = `${pagination}`;

  return (dispatch) => {
    if (search) {
      search = search.replace(/=/g, ':').replace(/&/g, ',');
      url = `${pagination}&search=${search}`;
    }

    dispatch(resetUserRankList());
    dispatch(getUserRankList(url));
  };
};
