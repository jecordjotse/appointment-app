import { Grid } from "@mui/material";
import React from "react";
import AppointmentIconSvg from "../../svg/appointmentIcon";
import BookIconSvg from "../../svg/bookIcon";
import LoginIconSvg from "../../svg/loginIcon";
import StatusIconSvg from "../../svg/statusIcon";
import {HowItWorksWrap, IconItemWrap, TextItemWrap, TitleItemWrap, TitleWrap} from "./homeHowItWorksStyles"

const HomeHowItWorksComponent = () => {
  return (
    <>
    <HowItWorksWrap>
        <TitleWrap>How it Works!</TitleWrap>
          <div>
            <div><TitleItemWrap>As A Consultant</TitleItemWrap></div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <IconItemWrap style={{flex:"1 1 auto",}}>
                <LoginIconSvg />
                <TextItemWrap>
                Login with auto-generated LOGIN details
                </TextItemWrap>
              </IconItemWrap>
              <IconItemWrap style={{flex:"1 1 auto"}}>
                <AppointmentIconSvg />
                <TextItemWrap>Interact with feature on the dashboad like
APPROVE APPOINTMENT</TextItemWrap>
              </IconItemWrap>
              <IconItemWrap style={{flex:"1 1 auto"}}>
                <AppointmentIconSvg />
                <TextItemWrap>HAVE APPOINTMENT.
Use you appointment console to have the appointment</TextItemWrap>
              </IconItemWrap>
            </div>
            <div><TitleItemWrap>As A Client</TitleItemWrap></div>
            <div style={{display:"flex"}}>
              <IconItemWrap style={{flex:"1 1 auto"}}>
                <LoginIconSvg />
                <TextItemWrap>Book appointment</TextItemWrap>
              </IconItemWrap>
              <IconItemWrap style={{flex:"1 1 auto"}}>
                <AppointmentIconSvg />
                <TextItemWrap>View Status</TextItemWrap>
              </IconItemWrap>
            </div>
          </div>
        </HowItWorksWrap>
    </>
  );
};

export default HomeHowItWorksComponent;
