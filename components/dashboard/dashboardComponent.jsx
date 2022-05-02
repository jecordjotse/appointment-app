import { useRouter } from "next/router";
import React from "react";
import PageViewController from "../../utils/pageViewController";
import ApproveAppointment from "./vws/approveAppointment.vws";
import EditAppointment from "./vws/editAppointment.vws";
import HaveAppointment from "./vws/haveAppointment.vws";
import HomePage from "./vws/home.vws";
import ListAppointments from "./vws/listAppointments.vws";
import PreviewSession from "./vws/previewSession.vws";
import Upcoming from "./vws/upcoming.vws";

const DashboardComponent = () => {
	const router = useRouter();
	const vws = PageViewController(router.query.path);
	//Page View Controller
	switch (vws) {
	case "approve":
		return <ApproveAppointment />;
	case "edit":
		return <EditAppointment />;
	case "have":
		return <HaveAppointment />;
	case "list":
		return <ListAppointments />;
	case "preview":
		return <PreviewSession />;
	case "upcoming":
		return <Upcoming />;
	case "home":
	default:
		return <HomePage />;
	}
};

export default DashboardComponent;
