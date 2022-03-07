import { createSelector } from "reselect";

const selectAppointments = (state) => state.appointmentsData;

export const selectDateAppointments = createSelector(
  [selectAppointments],
  (appointments) => appointments.isFetching
);

export const selectApprovalAppointments = createSelector(
  [selectAppointments],
  (appointments) => appointments.isFetching
);

export const selectIsAppointmentFetching = createSelector(
  [selectAppointments],
  (appointments) => appointments.isFetching
);

export const selectAppointmentError = createSelector(
  [selectAppointments],
  (appointments) => appointments.error
);

export const selectIsDataEmpty = createSelector(
  [selectAppointments],
  (appointments) => appointments.dataEmpty
);

export const selectLatestVisible = createSelector(
  [selectAppointments],
  (appointments) => appointments.lastVisible
);
