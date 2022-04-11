import styled from "styled-components";

export const HomeBannerWrap = styled.div`
  height: 80vh;
  width: auto;
  position: relative;
  background: #ffffff;
  padding: 0 46px 0 46px;
  > svg {
    height: 100vh;
    width: 100vw;
  }

  > div:last-of-type {
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    margin: 0 auto;
    padding-top: 40px;
    z-index: 3;
  }

  @media only screen and (max-width: 600px) {
    #OBJECTS {
      transform: translate(422.04px, 100px);
    }
  }

  #light {
    transform-origin: top center !important;

    > g {
      animation: swing ease-in-out 5s infinite alternate both;
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  #banner-text {
    @media only screen and (max-width: 600px) {
      transform: translateY(-180px);
    }
    @media (max-height: 670px) {
      transform: translateY(-80px);
    }
  }
`;

export const TitleText = styled.h2`
  width: 236px;
  height: 77px;
  font-family: Abel;
  font-weight: normal;
  font-size: 60px;
  color: #253551;
  text-decoration: rgb(37, 53, 81);
`;
