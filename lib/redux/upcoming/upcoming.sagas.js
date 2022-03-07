import { all, call, put, takeLatest } from "redux-saga/effects";
import UpcomingActionTypes from "./upcoming.types";
import {
  fetchUpcomingAppointmentsFailure,
  fetchUpcomingAppointmentsSuccess,
} from "./upcoming.actions";

//  Fetch results
function* fetchUpcomingStart({ payload }) {
  try {
    //http://localhost:3000/appointments/s?q=Self&duration=2&start_date=163469704000&min_duration=1&max_duration=4&approval_status=1
    let today = new Date().getTime() + 604800;
    let url = `http://localhost:3000/appointments/s?before_date=${today}`;

    if (!!payload) url = url + "&approval_status=" + payload;
    console.log(url);
    const res = yield fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const result_ = yield res.json();

    yield put(fetchUpcomingAppointmentsSuccess(result_));
  } catch (error) {
    yield put(fetchUpcomingAppointmentsFailure(error.message));
  }
}

function* onFetchUpcomingAppointmentsStart() {
  yield takeLatest(
    UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_START,
    fetchUpcomingStart
  );
}

export function* upcomingSagas() {
  yield all([call(onFetchUpcomingAppointmentsStart)]);
}
