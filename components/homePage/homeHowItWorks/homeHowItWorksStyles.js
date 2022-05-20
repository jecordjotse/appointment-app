import styled from "styled-components";
import { Container } from "../../../styles/appGlobal";

export const HowItWorksWrap = styled(Container)`
	background: #ffffff;
	height: fit-content;
	min-height: 636px;
	padding: 10px 10px 10px 46px;
	width: auto;
	display: grid;
	justify-content: stretch;
	@media all and (min-width: 900px) {
		margin: 0 30px 0 0;
	}
`;

export const IconItemRow = styled.div`
	@media all and (max-width: 636px) {
		display: "grid";
	}
	@media all and (min-width: 636px) {
		display: "flex";
	}
`;

export const IconItemWrap = styled.div`
	justify-content: center;
	display: grid;
	@media all and (min-width: 636px) {
		flex: 1 1 auto;
	}
`;

export const TextItemWrap = styled.p`
	width: 134px;
	height: 71px;
	font-family: Dosis;
	font-size: 16px;
	color: #231736;
	text-decoration: rgb(35, 23, 54);
`;

export const TitleItemWrap = styled.h4`
	height: 31px;
	font-family: Dosis;
	font-size: 24px;
	font-weight: lighter;
	color: #231736;
	text-decoration: rgb(35, 23, 54);
	margin: 15px 7px;
`;

export const TitleWrap = styled.h2`
	height: 63px;
	width: fit-content;
	font-weight: lighter;
	font-family: Abel;
	font-size: 48px;
	color: #253551;
	text-decoration: rgb(37, 53, 81);
	margin: 0;
`;
