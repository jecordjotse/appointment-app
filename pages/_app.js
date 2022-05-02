import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header/header";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

MyApp.propTypes = {
	pageProps: PropTypes.shape({}),
	Component: PropTypes.elementType,
};

export default MyApp;
