import { takeLatest, call, put, all } from "redux-saga/effects";
import EditAppointmentActionTypes from "./edit-appointment.types";

import {
  editAppointmentsFailure,
  editAppointmentsSuccess,
} from "./edit-appointment.actions";
const _url =
  "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";

function* editAppointment({ payload }) {
  try {
    let url = `${_url}/appointments/${payload.new_appointment._id}`;

    const res = yield fetch(url, {
      body: JSON.stringify({
        start: new Date(payload.new_appointment.start_date).getTime(),
        duration: Number(payload.new_appointment.duration),
        short_desc: payload.new_appointment.short_desc,
        topic: payload.new_appointment.topic,
        description: payload.new_appointment.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const result_ = yield res.json();
    yield put(
      editAppointmentsSuccess({
        current_appointment: result_,
        success: "Succesfully Edited",
      })
    );
  } catch (error) {
    yield put(editAppointmentsFailure(error.message));
  }
}

function* onEditAppointment() {
  yield takeLatest(
    EditAppointmentActionTypes.EDIT_APPOINTMENT_START,
    editAppointment
  );
}

export function* editAppointmentSagas() {
  yield all([call(onEditAppointment)]);
}
