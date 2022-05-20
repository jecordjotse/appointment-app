import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header/header";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<BodyWrap>
				<Component {...pageProps} />
			</BodyWrap>
		</>
	);
}

const BodyWrap = styled.div`
	@media all and (min-width: 1200px) {
		width: 90vw;
		margin: auto;
		max-width: 1600px;
	}

	@media all and (max-width: 1200px) {
		width: 100vw;
		margin: auto;
	}
`;

MyApp.propTypes = {
	pageProps: PropTypes.shape({}),
	Component: PropTypes.elementType,
};

export default MyApp;
