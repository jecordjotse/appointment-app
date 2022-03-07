import EditAppointmentActionTypes from "./edit-appointment.types";

const INITIAL_STATE = {
  current_appointment: {},
  new_appointment: {},
  editingAppointment: false,
  error: "",
  success: "",
};

const editAppointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EditAppointmentActionTypes.EDIT_APPOINTMENT_START:
      return {
        ...state,
        editingAppointment: true,
        new_appointment: action.payload.new_appointment,
        error: "",
        success: "",
      };

    case EditAppointmentActionTypes.EDIT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        editingAppointment: false,
        current_appointment: action.payload.current_appointment,
        error: "",
        success: action.payload.success,
      };

    case EditAppointmentActionTypes.EDIT_APPOINTMENT_FAILURE:
      return {
        ...state,
        editingAppointment: false,
        error: action.payload,
      };

    case EditAppointmentActionTypes.SET_EDITING_APPOINTMENT:
      return {
        ...state,
        current_appointment: action.payload.current_appointment,
      };

    case EditAppointmentActionTypes.CLEAR_EDITING_APPOINTMENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default editAppointmentReducer;
