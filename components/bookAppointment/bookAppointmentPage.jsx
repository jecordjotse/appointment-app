import PropTypes from "prop-types";
import React from "react";
import FormGirlSvg from "../svg/formSvgGirl";
import FormGuySvg from "../svg/formSvgGuy";
import BookAppointment1Component from "./bookAppointment1";
import BookAppointment2Component from "./bookAppointment2";
import { BookAppointmentPageWrap } from "./bookAppointmentPagesStyles";

const BookAppointmentPage = ({ page }) => {
	switch (page) {
	case "2":
		return (
			<>
				<BookAppointmentPageWrap>
					<BookAppointment2Component />
					<FormGuySvg />
				</BookAppointmentPageWrap>
			</>
		);
	case "1":
	default:
		return (
			<>
				<BookAppointmentPageWrap>
					<FormGirlSvg />
					<div style={{ content: "\"\"", width: "20%" }}></div>
					<BookAppointment1Component />
				</BookAppointmentPageWrap>
			</>
		);
	}
};
BookAppointmentPage.propTypes = {
	page: PropTypes.string
};

export default BookAppointmentPage;
