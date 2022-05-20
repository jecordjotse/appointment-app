import React from "react";
import { HomeBannerWrap, TitleText } from "./homePageBannerStyles";
import Link from "next/link";
import HomeBannerSvg from "../../svg/homeBannerSvg";
import { Button, Grid } from "@mui/material";
import ButtonIconSvg from "../../svg/buttonIcon";

const HomePageBanner = () => {
	return (
		<>
			<HomeBannerWrap>
				<Grid
					container
					spacing={0}
					sx={{ position: "relative !important" }}
					p={0}
					m={0}>
					<Grid item xs={12} md={6} p={0} m={0}>
						<div>
							<TitleText>Welcome!</TitleText>
							<p>
								Book an appointment with us to discuss your
								thoughts on the subject. We&apos;d love to see
								you through the process{" "}
							</p>
							<Link href="/book-an-appointment/1" passHref>
								<Button className="BookButton">
									BOOK{"   "} <ButtonIconSvg />
								</Button>
							</Link>

							<h3
								style={{
									"margin-top": "85px",
									fontWeight: "lighter",
									fontSize: "24px",
								}}>
								ALREADY BOOKED!
							</h3>
							<p>
								That&apos;s great, let&apos;s{" "}
								<Link href="/appointments">
									Check You Appointment Status
								</Link>
								to view further details
							</p>
						</div>
					</Grid>
					<Grid item xs={12} md={6} p={0} m={0}>
						<HomeBannerSvg style={{ width: "100%" }} />
					</Grid>
				</Grid>
			</HomeBannerWrap>
		</>
	);
};

export default HomePageBanner;
