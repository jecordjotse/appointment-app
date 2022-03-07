import { createSelector } from "reselect";

const editingAppointment = (state) => state.editingAppointment;

export const selecCurrentAppointment = createSelector(
  [editingAppointment],
  (editing) => editing.current_appointment
);

export const selectNewAppointment = createSelector(
  [editingAppointment],
  (editing) => editing.new_appointment
);

export const selectIsEditingAppointment = createSelector(
  [editingAppointment],
  (editing) => editing.editingAppointment
);

export const selectEditingAppointmentError = createSelector(
  [editingAppointment],
  (editing) => editing.error
);

export const selectEditingAppointmentSuccess = createSelector(
  [editingAppointment],
  (editing) => editing.success
);
