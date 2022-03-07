import AppointmentDataActionTypes from "./appointment-data.types";

const INITIAL_STATE = {
  AppointmentItems: [],
  limit: 0,
  lastVisible: null,
  isFetching: true,
  reFetching: false,
  dataEmpty: false,
  error: "",
};

const appointmentsDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppointmentDataActionTypes.FETCH_APPOINTMENT_START:
      return {
        ...state,
        isFetching: true,
        limit: action.payload.limit,
        error: "",
      };

    case AppointmentDataActionTypes.FETCH_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        AppointmentItems: action.payload,
      };

    case AppointmentDataActionTypes.FETCH_APPOINTMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case AppointmentDataActionTypes.SET_LATEST_DOC:
      return {
        ...state,
        lastVisible: action.payload,
      };

    case AppointmentDataActionTypes.SET_DATA_EMPTY:
      return {
        ...state,
        dataEmpty: true,
        reFetching: false,
      };
    case AppointmentDataActionTypes.CLEAR_APPOINTMENT:
      return {
        ...state,
        AppointmentItems: [],
        dataEmpty: false,
      };

    default:
      return state;
  }
};

export default appointmentsDataReducer;
