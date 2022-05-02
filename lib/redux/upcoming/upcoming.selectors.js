import { createSelector } from "reselect";

const upcoming = (state) => state.seaupcomingrch;

export const selectUpcomingAppointments = createSelector(
	[upcoming],
	(upcoming) => upcoming.upcomingAppointments
);

export const selectUpcomingApproval_status = createSelector(
	[upcoming],
	(upcoming) => upcoming.approval_status
);

export const selectIsFetchingResults = createSelector(
	[upcoming],
	(upcoming) => upcoming.fetchingResults
);

export const selectUpcomingError = createSelector(
	[upcoming],
	(upcoming) => upcoming.error
);

export const selectUpcomingSuccess = createSelector(
	[upcoming],
	(upcoming) => upcoming.success
);
