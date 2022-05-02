import { takeLatest, call, put, all } from "redux-saga/effects";
import AppointmentDataActionTypes from "./appointment-data.types";

import {
	fetchAppointmentsFailure,
	fetchAppointmentsSuccess,
	setLatestDoc,
} from "./appointment-data.actions";

const _url =
    "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";
//  Fetch Data
function* fetchAppointments({ payload }) {
	//http://localhost:3000/appointments/s?q=Self&duration=2&start_date=163469704000&min_duration=1&max_duration=4&approval_status=1
	try {
		let url;
		if (payload.limit) url = `${_url}/appointments?limit=${payload.limit}`;
		else url = `${_url}/appointments`;
		const res = yield fetch(url, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "GET",
		});

		const result_ = yield res.json();
		let lastVisible = result_[result_.length - 1];
		yield put(setLatestDoc(lastVisible));
		yield put(fetchAppointmentsSuccess(result_));
	} catch (error) {
		yield put(fetchAppointmentsFailure(error.message));
	}
}

function* onFetchAppointmentsStart() {
	yield takeLatest(
		AppointmentDataActionTypes.FETCH_APPOINTMENT_START,
		fetchAppointments
	);
}

export function* appointmentsDataSagas() {
	yield all([call(onFetchAppointmentsStart)]);
}
