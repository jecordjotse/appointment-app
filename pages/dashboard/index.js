import React from "react";
import { Provider } from "react-redux";
import { store } from "../../lib/redux/store";
import DashboardComponent from "../../components/dashboard/dashboardComponent";
import Sidebar from "../../components/dashboard/utils/sidebar";

const DashboardHomePage = () => {
	return (
		<>
			<Provider store={store}>
				<Sidebar />
				<DashboardComponent />
			</Provider>
		</>
	);
};

export default DashboardHomePage;
