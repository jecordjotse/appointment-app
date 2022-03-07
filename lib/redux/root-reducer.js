import { combineReducers } from "redux";
import appointmentsDataReducer from "./appointments-data/appointment-data.reducer";
import editAppointmentReducer from "./edit-appointment/edit-appointment.reducer";
import searchReducer from "./search/search.reducer";
import upcomingReducer from "./upcoming/upcoming.reducer";

const rootReducer = combineReducers({
  appointmentData: appointmentsDataReducer,
  search: searchReducer,
  editAppointment: editAppointmentReducer,
  upcoming: upcomingReducer,
});

export default rootReducer;
