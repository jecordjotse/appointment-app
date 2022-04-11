import { Grid } from '@mui/material'
import React from 'react'
import BookAppointment1Component from '../bookAppointment/bookAppointment1'
import HomeHowItWorksComponent from './homeHowItWorks/homeHowItWorks'
import HomePageBanner from './homePageBanner/homePageBanner'
import { HomePageWrap } from './homePageStyles'

function HomePageComponent() {
  return (
    <HomePageWrap>
        <Grid container spacing={3} columns>
            <Grid item xs={8} md={8}>
            <HomePageBanner/>
            </Grid>
            <Grid item container spacing={3}>
                <Grid item xs={8} md={8}>
                    <HomeHowItWorksComponent />
                </Grid>
                <Grid item xs={8} md={4}>
                    <BookAppointment1Component />
                </Grid>
            </Grid>
        </Grid>
    </HomePageWrap>
  )
}

export default HomePageComponent