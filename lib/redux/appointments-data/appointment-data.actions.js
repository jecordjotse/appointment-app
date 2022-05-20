import AppointmentDataActionTypes from "./appointment-data.types";

export const fetchAppointmentsStart = ({ date, limit }) => ({
	type: AppointmentDataActionTypes.FETCH_APPOINTMENT_START,
	payload: { date, limit },
});

export const fetchAppointmentsSuccess = (appointments) => ({
	type: AppointmentDataActionTypes.FETCH_APPOINTMENT_SUCCESS,
	payload: appointments,
});

export const fetchAppointmentsFailure = (error) => ({
	type: AppointmentDataActionTypes.FETCH_APPOINTMENT_FAILURE,
	payload: error,
});

export const setLatestDoc = (doc) => ({
	type: AppointmentDataActionTypes.SET_LATEST_DOC,
	payload: doc,
});

export const clearProperties = () => ({
	type: AppointmentDataActionTypes.CLEAR_APPOINTMENT,
});
