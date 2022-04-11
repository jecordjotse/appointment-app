import React from 'react'
import {HomeBannerWrap, TitleText} from './homePageBannerStyles'
import Link  from "next/link";
import { Container } from '../../../styles/appGlobal'
import HomeBannerSvg from '../../svg/homeBanner/homeBannerSvg'
import { Button, Grid } from '@mui/material'
import ButtonIconSvg from '../../svg/homeBanner/buttonIcon';

const HomePageBanner = () => {
  return (
  <>
    <HomeBannerWrap>
      <Grid container spacing={1}>
          <Grid item xs={8} md={7}>
            <div>
              <TitleText>Welcome!</TitleText>
                <p>
                Book an appointment with us to discuss your thoughts on the subject. We'd love to see you through the process{" "}
                </p>
                <Link href="/book-an-appointment/1">
                   <Button className="BookButton">BOOK{"   "} <ButtonIconSvg /></Button>
                </Link>
                
                <h3 style={{"margin-top":"85px", "font-weight":"lighter", "font-size":"24px"}}>ALREADY BOOKED!</h3>
                <p>
                  That's great, let's <Link href="/appointments">Check You Appointment Status</Link>to view further details
                </p>
              </div>
            </Grid>
            <Grid item xs={8} md={5}>
              <HomeBannerSvg />
            </Grid>
      </Grid>
    </HomeBannerWrap>
</>
  )
}

export default HomePageBanner