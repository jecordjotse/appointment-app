import React from 'react'
import {HomeBannerWrap} from './homePageBannerStyles'
import { Container, Grid } from '../../../styles/appGlobal'
import HomeBannerSvg from '../../svg/homeBanner/homeBannerSvg'

const HomePageBanner = () => {
  return (
  <>
    <HomeBannerWrap>
      <Grid num='2' gapPhone='22px'>
        <div>
          <h2>Welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consequat vestibulum pulvinar.{" "}
          </p>
          <p>
            Vestibulum faucibus metus id quam suscipit congue. Donec libero
            nisl, pretium ac massa at, pretium interdum massa. Etiam scelerisque
            nunc at mattis eleifend.{" "}
          </p>
          <p>
            Nam vulputate nisl ut volutpat facilisis. Etiam vestibulum urna quis
            ante malesuada, non porttitor leo consequat. Vestibulum rutrum
            dictum augue in ultrices. Morbi feugiat justo eget lacus convallis
            malesuada.
          </p>
        </div>
        <HomeBannerSvg />
        </Grid>
      </HomeBannerWrap>
</>
  )
}

export default HomePageBanner