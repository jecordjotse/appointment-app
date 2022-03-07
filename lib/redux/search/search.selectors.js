import { createSelector } from "reselect";

const search = (state) => state.search;

export const selectSearchResults = createSelector(
  [search],
  (search) => search.searchResults
);

export const selectSearchFilters = createSelector(
  [search],
  (search) => search.filters
);

export const selectIsFetchingResults = createSelector(
  [search],
  (search) => search.fetchingResults
);

export const selectSearchError = createSelector(
  [search],
  (search) => search.error
);

export const selectSearchSuccess = createSelector(
  [search],
  (search) => search.success
);
