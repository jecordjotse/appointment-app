import styled from "styled-components";

export const AppointmentsPageWrap = styled.div`
	width: 100%;
	box-sizing: border-box;
	font-family: "Dosis";
	margin: 90px 0 0 0;
	@media all and (min-width: 626px) {
		display: flex;
	}
	@media all and (max-width: 626px) {
		display: grid;
	}
`;
