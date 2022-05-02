import { all, call } from "redux-saga/effects";
import { appointmentsDataSagas } from "./appointments-data/appointment-data.sagas";
import { editAppointmentSagas } from "./edit-appointment/edit-appointment.sagas";
import { searchSagas } from "./search/search.sagas";
import { upcomingSagas } from "./upcoming/upcoming.sagas";

export default function* rootSaga() {
	yield all([
		call(appointmentsDataSagas),
		call(searchSagas),
		call(editAppointmentSagas),
		call(upcomingSagas),
	]);
}
