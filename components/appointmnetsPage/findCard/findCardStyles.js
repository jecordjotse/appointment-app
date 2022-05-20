import styled from "styled-components";

export const FindCardWrap = styled.div`
	max-width: 566px;
	height: 607px;
	background: #ffffff;
	flex: fit-content;
	padding: 20px 60px 20px 32px;
	margin-right: 50px;
	fill: #ffffff;
	box-sizing: border-box;
	box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);

	@media all and (min-width: 626px) {
		width: 40vw;
	}
	@media all and (max-width: 626px) {
		width: 100%;
	}
	p {
		max-width: 394px;
		width: fit-content;
		height: 40px;
		font-family: Dosis;
		font-size: 16px;
		color: #253551;
		text-decoration: rgb(37, 53, 81);
		margin: 25px 0 0 0;
	}
	label {
		width: 503px;
		height: 31px;
		font-family: Dosis;
		font-size: 24px;
		color: #231736;
		text-decoration: rgb(35, 23, 54);
		margin-top: 25px;
	}
`;

export const TitleWrap = styled.h2`
	width: 100%;
	font-family: Abel;
	font-size: 45px;
	font-weight: lighter;
	color: #253551;
	text-decoration: rgb(37, 53, 81);
	padding: 0 5px 0 5px;
	margin: 0;
`;

export const LabelWrap = styled.label`
	width: 503px;
	height: 31px;
	font-family: Dosis;
	font-size: 24px;
	color: #231736;
	text-decoration: rgb(35, 23, 54);
	margin-top: 25px;
`;
