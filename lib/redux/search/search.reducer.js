import SearchActionTypes from "./search.types";

const INITIAL_STATE = {
	filters: {},
	searchResults: [],
	fetchingResults: false,
	error: "",
	success: "",
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case SearchActionTypes.FETCH_SEARCH_RESULTS_START:
		return {
			...state,
			fetchingResults: true,
			filters: { ...state.filters, ...action.payload.filters },
			error: "",
			success: "",
			searchResults: action.payload.currentResults,
		};

	case SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
		return {
			...state,
			fetchingResults: false,
			searchResults: action.payload,
			error: "",
			success: "successful",
		};

	case SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE:
		return {
			...state,
			fetchingResults: false,
			error: action.payload,
		};

	case SearchActionTypes.SET_CURRENT_RESULTS:
		return {
			...state,
			searchResults: action.payload.results,
			filters: { ...state.filters, ...action.payload.filters },
		};

	default:
		return state;
	}
};

export default searchReducer;
