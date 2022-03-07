import styled from "styled-components";

export const HomeBannerWrap = styled.div`
  height: 80vh;
  width: auto;
  position: relative;
  > svg {
    height: 100vh;
    width: 100vw;
  }

  > div:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
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
