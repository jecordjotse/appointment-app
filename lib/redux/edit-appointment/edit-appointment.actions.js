import EditAppointmentActionTypes from "./edit-appointment.types";

export const editAppointmentsStart = ({
	new_appointment,
	current_appointment,
}) => ({
	type: EditAppointmentActionTypes.EDIT_APPOINTMENT_START,
	payload: { new_appointment: { ...current_appointment, ...new_appointment } },
});

export const editAppointmentsSuccess = ({ current_appointment, success }) => ({
	type: EditAppointmentActionTypes.EDIT_APPOINTMENT_SUCCESS,
	payload: { current_appointment, success },
});

export const editAppointmentsFailure = (error) => ({
	type: EditAppointmentActionTypes.EDIT_APPOINTMENT_FAILURE,
	payload: error,
});

export const setEditingAppointment = (current_appointment) => {
	console.log(JSON.stringify(current_appointment, undefined, 2));
	return {
		type: EditAppointmentActionTypes.SET_EDITING_APPOINTMENT,
		payload: { current_appointment },
	};
};

export const clearEditingAppointment = () => ({
	type: EditAppointmentActionTypes.CLEAR_EDITING_APPOINTMENT,
});
