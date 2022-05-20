import { Box, Grid } from "@mui/material";
import React from "react";
import AppointmentIconSvg from "../../svg/appointmentIcon";
import BookIconSvg from "../../svg/bookIcon";
import LoginIconSvg from "../../svg/loginIcon";
import StatusIconSvg from "../../svg/statusIcon";
import {
	HowItWorksWrap,
	IconItemRow,
	IconItemWrap,
	TextItemWrap,
	TitleItemWrap,
	TitleWrap,
} from "./homeHowItWorksStyles";

const HomeHowItWorksComponent = () => {
	return (
		<HowItWorksWrap>
			<TitleWrap>How it Works!</TitleWrap>
			<Box sx={{ flexGrow: 1 }}>
				<TitleItemWrap>As A Consultant</TitleItemWrap>
				<Grid
					container
					justifyContent="space-evenly"
					spacing={0}
					p={0}
					m={0}>

					<Grid item container spacing={0} p={0} m={0} md={4} xs={6}>
						<IconItemWrap>
							<LoginIconSvg />
							<TextItemWrap>
								Login with auto-generated LOGIN details
							</TextItemWrap>
						</IconItemWrap>
					</Grid>
					<Grid item container spacing={0} p={0} m={0} md={4} xs={6}>
						<IconItemWrap>
							<AppointmentIconSvg style={{ width: "100px" }} />
							<TextItemWrap>
								Interact with feature on the dashboad like
								APPROVE APPOINTMENT
							</TextItemWrap>
						</IconItemWrap>
					</Grid>
					<Grid item container spacing={0} p={0} m={0} md={4} xs={6}>
						<IconItemWrap>
							<AppointmentIconSvg style={{ width: "100px" }} />
							<TextItemWrap>
								HAVE APPOINTMENT. Use you appointment console to
								have the appointment
							</TextItemWrap>
						</IconItemWrap>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1, marginTop: "10px" }}>

				<TitleItemWrap>As A Client</TitleItemWrap>
				<Grid container spacing={0} p={0} m={0}>
					<Grid item container spacing={0} p={0} m={0} md={6} xs={6}>
						<IconItemWrap>
							<BookIconSvg style={{ height: "100px" }} />
							<TextItemWrap>Book appointment</TextItemWrap>
						</IconItemWrap>
					</Grid>
					<Grid item container spacing={0} p={0} m={0} md={6} xs={6}>
						<IconItemWrap>
							<StatusIconSvg style={{ width: "100px" }} />
							<TextItemWrap>View Status</TextItemWrap>
						</IconItemWrap>
					</Grid>
				</Grid>
			</Box>
		</HowItWorksWrap>
	);
};

export default HomeHowItWorksComponent;
