import { Grid } from "@mui/material";
import React from "react";
import AppointmentIconSvg from "../../svg/homeBanner/appointmentIcon";
import BookIconSvg from "../../svg/homeBanner/bookIcon";
import LoginIconSvg from "../../svg/homeBanner/loginIcon";
import StatusIconSvg from "../../svg/homeBanner/statusIcon";
import {HowItWorksWrap} from "./homeHowItWorksStyles"

const HomeHowItWorksComponent = () => {
  return (
    <>
    <HowItWorksWrap>
        <h2>How it Works!</h2>
        <Grid container columns>
              <Grid item xs={8} md={8}>As A Consultant</Grid>
            <Grid container spacing={1} item xs={8} md={8}>
              <Grid item xs={4} md={4}>
                <LoginIconSvg />
              </Grid>
              <Grid item xs={4} md={4}>
                <AppointmentIconSvg />
              </Grid>
              <Grid item xs={4} md={4}>
                <AppointmentIconSvg />
              </Grid>
            </Grid>
              <Grid item xs={8} md={8}>As A Client</Grid>
            <Grid container spacing={1} item xs={8} md={8}>
              <Grid item xs={4} md={4}>
                <BookIconSvg />
              </Grid>
              <Grid item xs={4} md={4}>
                <StatusIconSvg />
              </Grid>
            </Grid>
          </Grid>
          <div>
            <div><h3>As A Consultant</h3></div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div style={{flex:"1 1 auto",}}>
                <LoginIconSvg />
              </div>
              <div style={{flex:"1 1 auto"}}>
                <AppointmentIconSvg />
              </div>
              <div style={{flex:"1 1 auto"}}>
                <AppointmentIconSvg />
              </div>
            </div>
            <div><h3>As A Client</h3></div>
            <div style={{display:"flex"}}>
              <div style={{flex:"1 1 auto"}}>
                <LoginIconSvg />
              </div>
              <div style={{flex:"1 1 auto"}}>
                <AppointmentIconSvg />
              </div>
            </div>
          </div>
       <p>
          Donec gravida dui ac accumsan tempor. Phasellus vulputate cursus
          tempus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Curabitur nec porttitor ante{" "}
        </p>
        <p>
          Vestibulum faucibus metus id quam suscipit congue. Donec libero nisl,
          pretium ac massa at, pretium interdum massa. Etiam scelerisque nunc at
          mattis eleifend.{" "}
        </p>
        <p>
          Nam vulputate nisl ut volutpat facilisis. Etiam vestibulum urna quis
          ante malesuada, non porttitor leo consequat. Vestibulum rutrum dictum
          augue in ultrices. Morbi feugiat justo eget lacus convallis malesuada.
        </p>
        </HowItWorksWrap>
    </>
  );
};

export default HomeHowItWorksComponent;
