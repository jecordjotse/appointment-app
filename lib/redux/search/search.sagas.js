import { all, call, put, takeLatest } from "redux-saga/effects";
import SearchActionTypes from "./search.types";
import {
	fetchSearchResultsFailure,
	fetchSearchResultsSuccess,
} from "./search.actions";
const _url =
  "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";

//  Fetch results
function* fetchResultsStart({ payload }) {
	try {
		//http://localhost:3000/appointments/s?q=Self&duration=2&start_date=163469704000&min_duration=1&max_duration=4&approval_status=1
		let url = `${_url}/appointments/s?q=`;
		if (payload.filters.search_text) {
			console.log("Search_text available");
			url = url + payload.filters.search_text;
		}
		if (payload.filters.duration)
			url = url + "&duration=" + payload.filters.duration;
		if (payload.filters.start_date)
			url = url + "&start_date=" + payload.filters.start_date;
		if (payload.filters.approval_status) {
			console.log("Here");
			url = url + "&approval_status=" + payload.filters.approval_status;
		}
		if (payload.filters.min_duration)
			url = url + "&min_duration=" + payload.filters.min_duration;
		if (payload.filters.max_duration)
			url = url + "&max_duration=" + payload.filters.max_duration;
		if (payload.filters.page) url = url + "&page=" + payload.filters.page;
		if (payload.filters.limit) url = url + "&limit=" + payload.filters.limit;
		console.log(url);
		const res = yield fetch(url, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "GET",
		});

		const result_ = yield res.json();

		yield put(fetchSearchResultsSuccess(result_));
	} catch (error) {
		yield put(fetchSearchResultsFailure(error.message));
	}
}

function* onFetchSearchResultsStart() {
	yield takeLatest(
		SearchActionTypes.FETCH_SEARCH_RESULTS_START,
		fetchResultsStart
	);
}

export function* searchSagas() {
	yield all([call(onFetchSearchResultsStart)]);
}
