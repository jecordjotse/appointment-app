import SearchActionTypes from "./search.types";

//  Initial fetch
export const fetchSearchResultsStart = ({ filters }) => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_START,
  payload: { filters },
});

export const fetchSearchResultsSuccess = (results) => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
  payload: results,
});

export const fetchSearchResultsFailure = (error) => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
  payload: error,
});

export const setCurrentRegion = (region) => ({
  type: SearchActionTypes.SET_CURRENT_REGION,
  payload: region,
});

export const setCurrentTown = (town) => ({
  type: SearchActionTypes.SET_CURRENT_TOWN,
  payload: town,
});

export const setResults = ({ filters, results }) => ({
  type: SearchActionTypes.SET_CURRENT_RESULTS,
  payload: { filters, results },
});
