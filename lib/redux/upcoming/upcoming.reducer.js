import UpcomingActionTypes from "./upcoming.types";

const INITIAL_STATE = {
  approval_status: null,
  upcomingAppointments: [],
  fetchingResults: false,
  error: "",
  success: "",
};

const upcomingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_START:
      return {
        ...state,
        fetchingResults: true,
        approval_status: action.payload,
        error: "",
        success: "",
      };

    case UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        fetchingResults: false,
        upcomingAppointments: action.payload,
        error: "",
        success: "successful",
      };

    case UpcomingActionTypes.FETCH_UPCOMING_APPOINTMENTS_FAILURE:
      return {
        ...state,
        fetchingResults: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingReducer;
