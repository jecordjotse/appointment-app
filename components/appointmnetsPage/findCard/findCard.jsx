import React from "react";
import { useRouter } from "next/router";
import { FindCardWrap, TitleWrap } from "./findCardStyles";
import Input from "../../input";
import PropTypes from "prop-types";

const FindCard = ({ appointments, handleChange }) => {
	const router = useRouter();
	return (
		<FindCardWrap>
			<TitleWrap>Find Appointment</TitleWrap>
			<p>
				Please enter you 10 digit reference shown on the thank you page.
				It was also sent to you email{" "}
			</p>
			<div style={{ marginTop: "25px" }}>
				<label htmlFor="reference_code">Reference Code</label>
				<Input
					type="text"
					name="reference_code"
					id="reference_code"
					placeholder="e.g. 65fe030484"
					onKeyUpCapture={handleChange}
					style={{
						component: "input",
						style: {
							height: "34px",
							boxShadow: "inset 1px 1px 4px 2px rgba(0,0,0,0.2)",
							textDecoration: "rgb(37, 53, 81)",
						},
					}}
				/>
			</div>
			<div>
				<ul>
					{appointments?.map((appointment) => (
						<li key={`${appointment.ref_code}`}>
							<div
								style={{ display: "flex" }}
								onClick={() => {
									router.push(
										`/appointments/?appointment=${appointment._id}`,
										undefined,
										{ shallow: true }
									);
								}}>
								<div
									style={{
										flex: "1 1 auto",
										fontSize: "16px",
									}}>
									{appointment.ref_code}
								</div>
								<div
									style={{
										flex: "1 1 auto",
										fontSize: "16px",
									}}>
									{appointment.short_desc}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</FindCardWrap>
	);
};

FindCard.propTypes = {
	appointments: PropTypes.array,
	handleChange: PropTypes.func,
};

export default FindCard;
