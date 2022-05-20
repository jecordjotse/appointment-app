import styled from "styled-components";

export const HomePageWrap = styled.div`
	font-family: "Dosis";
	margin-top: 90px;
`;

export const HomeForm = styled.div`
	height: 636px;
	width: 452px;
	background: white;
	display: flex;
	justify-content: center;
	align-content: center;
	padding: 10px 0 5px 0;
	@media all and (min-width: 452px) {
		max-width: 452px;
	}

	@media all and (max-width: 452px) {
		max-width: 99vw;
	}

	@media all and (max-width: 900px) {
		margin: 30px auto 0 auto;
	}
`;
