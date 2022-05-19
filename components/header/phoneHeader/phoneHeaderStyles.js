import styled, { css } from "styled-components";

export const HeaderMainWrap = styled.div`
	position: fixed;
	left: 0px;
	top: 0px;
	right: 0px;
	background-color: #fff;
	z-index: 1000;
	box-shadow: 10px 2px #efeaf6;
	border-bottom: 1px;
	border-top: 0px;
	border-left: 0px;
	border-right: 0px;
	border-style: solid;
	border-color: #efeaf6;
	@media all and (min-width: 636px) {
		display: none;
	}
`;

export const HeaderWrap = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	> div {
		display: flex;
		flex: 1 1 auto;
	}
	> a {
		right: 0;
		position: relative;
	}
	@media all and (min-width: 990px) {
		max-width: 940px;
	}

	@media all and (min-width: 766px) {
		height: 67px;
		font-size: 22px;
	}

	@media all and (max-width: 766px) {
		height: 51px;
		font-size: 16px;
	}

	@media all and (min-width: 766px) and (max-width: 990px) {
		max-width: 730px;
	}

	@media all and (max-width: 990px) {
		padding: 0 10px;
	}
`;

export const Brand = styled.div`
	display: flex;
	flex: 1 1 auto;
	left: 0;
	p {
		font-size: 1.5rem;
		font-weight: bolder;
		margin-bottom: auto;
		margin-top: auto;
		max-height: 40px;
	}

	img {
		width: 50px;
	}

	span {
		@media all and (max-width: 350px) {
			display: none;
		}
	}
`;

export const DropDownWrap = styled.div`
	display: block;
	height: ${(props) => (props.showMenu ? "100vh" : "0px")};
	left: 0px;
	line-height: 20px;
	overflow-x: hidden;
	overflow-y: hidden;
	position: fixed;
	z-index: 10;
	right: 0px;
	width: 100vw;
	transition: height 0.5s;

	@media all and (min-width: 766px) {
		top: 60px;
	}

	@media all and (max-width: 766px) {
		top: 50px;
	}
`;

export const Wrapper = styled.div`
	content: " ";
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
`;

export const NavBar = styled.nav`
	background-attachment: scroll;
	background-clip: border-box;
	background-color: rgb(39, 40, 50);
	background-image: none;
	background-origin: padding-box;
	background-position-x: 0%;
	background-position-y: 0%;
	background-repeat: repeat;
	background-size: auto;
	box-sizing: border-box;
	color: rgb(51, 51, 51);
	z-index: 100;
	display: relative;
	left: 0px;
	min-width: 200px;
	overflow-x: visible;
	overflow-y: visible;
	padding-bottom: 24px;
	padding-top: 18px;
	position: absolute;
	right: 0px;
	text-align: center;
	top: 0px;
	transform: matrix(1, 0, 0, 1, 0, 0);
	transition-delay: 0s;
	a.active {
		color: rgb(255, 23, 127);
	}
`;

export const NavItem = styled.a`
	background-color: rgba(0, 0, 0, 0);
	box-sizing: border-box;
	color: #efeaf6;
	display: block;
	font-weight: 300;
	line-height: 33px;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 20px;
	padding-left: 0px;
	padding-right: 20px;
	padding-top: 20px;
	position: relative;
	text-align: left;
	text-decoration-color: rgb(255, 23, 127);
	text-decoration-line: none;
	text-decoration-style: solid;
	text-decoration-thickness: auto;
	transition-delay: 0s;
	transition-duration: 0.5s;
	transition-property: color;
	transition-timing-function: ease;
	vertical-align: top;
	@media all and (min-width: 990px) {
		max-width: 940px;
	}

	@media all and (min-width: 766px) and (max-width: 990px) {
		max-width: 730px;
	}

	@media all and (min-width: 766px) {
		font-size: 22px;
	}

	@media all and (max-width: 766px) {
		font-size: 16px;
	}

	@media all and (max-width: 990px) {
		padding: 0 10px;
	}
`;

export const SocialBarWrap = styled.div`
	box-sizing: border-box;
	color: rgb(51, 51, 51);
	display: flex;
	line-height: 20px;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 20px;
	padding-left: 0px;
	padding-right: 20px;
	padding-top: 20px;
	text-align: left;
	width: 940px;

	a {
		color: rgb(0, 0, 238);
		display: inline-block;
		line-height: 20px;
		margin-right: 16px;
		max-width: 100%;
		text-align: left;
		transition: 0.2s;

		:hover {
			transform: scale(1.1);
		}
	}
	@media all and (min-width: 990px) {
		max-width: 940px;
	}

	@media all and (min-width: 766px) and (max-width: 990px) {
		max-width: 730px;
	}

	@media all and (max-width: 990px) {
		padding: 0 10px;
		display: flex;
	}
`;
