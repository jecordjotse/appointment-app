import { Grid } from "@mui/material";
import React from "react";
import BookAppointment1Component from "../bookAppointment/bookAppointment1";
import HomeHowItWorksComponent from "./homeHowItWorks/homeHowItWorks";
import HomePageBanner from "./homePageBanner/homePageBanner";
import { HomeForm, HomePageWrap } from "./homePageStyles";

function HomePageComponent() {
	return (
		<HomePageWrap>
			<Grid container spacing={0} p={0} m={0}>
				<HomePageBanner />
				<Grid item container spacing={0} p={0} m={0} md={12} xs={12}>
					<Grid item xs={12} md>
						<HomeHowItWorksComponent />
					</Grid>
					<Grid item xs={12} md={"auto"} p={0} m={0}>
						<HomeForm>
							<BookAppointment1Component />
						</HomeForm>
					</Grid>
				</Grid>
			</Grid>
			{/* <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{flex:"1 1 auto"}}>
                    <HomePageBanner/>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{flex:"1 1 auto"}}>
                    <HomeHowItWorksComponent />
                </div>
                <div style={{flex:"1 1 auto"}}>
                    <BookAppointment1Component />
                </div>
            </div>
        </div> */}
		</HomePageWrap>
	);
}

export default HomePageComponent;
