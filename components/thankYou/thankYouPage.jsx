import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WelcomeSVG from "../svg/welcomeSVG";

const ThankYouPage = (props) => {
	return (
		<ThankyouWrap {...props}>
			<div>
				<h1>Thank You!</h1>
				<p>
					Thank you signing up. We respect your donec gravida dui ac
					accumsan tempor. Phasellus vulputate cursus tempus.{" "}
				</p>
				<p>
					Your Reference code: <small>{props.ref_code}</small>
				</p>
				<p>
					Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Curabitur nec porttitor ante
				</p>
			</div>
			<WelcomeSVG style={{ height: "100%" }} />
		</ThankyouWrap>
	);
};

const ThankyouWrap = styled.div`
	width: 100%;
	display: flex;
	height: 607px;
	background: #ffffff;
	margin-top: 90px;
	padding: 68px;
	box-sizing: border-box;
	h1,
	p {
		font-family: "Dosis";
		color: #253551;
		text-decoration: rgb(37, 53, 81);
	}

	h1 {
		width: 150px;
		height: 46px;
		font-size: 24px;
		margin-bottom: 49px;
	}

	p {
		max-width: 426px;
		height: 40px;
		font-size: 16px;
		margin-bottom: 53px;
		small {
			font-weight: bold;
			font-size: 19px;
			color: #ff6584;
		}
	}

	@media all and (max-width: 630px) {
		height: calc(100vw / 0.63);
	}
	> div {
		width: 50%;
		flex: 1 1 0;
		z-index: 99;
	}

	> svg {
		flex: 1 1 0;
		@media all and (max-width: 630px) {
			position: absolute;
			width: 90vw;
			margin-left: 5vw;
			margin-right: auto;
			left: 0;
			top: 0;
			z-index: 90;
			opacity: 25%;
		}
	}
`;

ThankYouPage.propTypes = {
	ref_code: PropTypes.string,
};

export default ThankYouPage;
