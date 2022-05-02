import UpcomingActionTypes from "./upcoming.types";

//  Initial fetch
export const fetchUpcomingAppointmentsStart = (approval_status) => ({
	type: UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_START,
	payload: approval_status,
});

export const fetchUpcomingAppointmentsSuccess = (results) => ({
	type: UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_SUCCESS,
	payload: results,
});

export const fetchUpcomingAppointmentsFailure = (error) => ({
	type: UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_FAILURE,
	payload: error,
});
