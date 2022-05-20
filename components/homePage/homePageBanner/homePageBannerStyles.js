import styled from "styled-components";

export const HomeBannerWrap = styled.div`
	height: 600px;
	width: 100%;
	position: relative;
	background: #ffffff;
	padding: 0 46px 0 46px;
	margin-bottom: 30px;
	> svg {
		height: 100vh;
		width: 100vw;
	}

	> div:last-of-type {
		position: absolute;
		width: 100%;
		height: calc(100% - 80px);
		margin: 0 auto;
		padding-top: 40px;
		z-index: 3;
	}

	@media all and (max-width: 900px) {
		height: 80vh;
	}

	@media all and (max-width: 900px) {
		height: fit-content;
	}
`;

export const TitleText = styled.h2`
	width: 236px;
	height: 77px;
	font-family: Abel;
	font-weight: normal;
	font-size: 60px;
	color: #253551;
	text-decoration: rgb(37, 53, 81);
`;

export const SvgWrap = styled.div``;
