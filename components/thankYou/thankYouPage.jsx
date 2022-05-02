import React from 'react'
import styled from "styled-components";
import WelcomeSVG from '../svg/welcomeSVG'


const ThankYouPage = (props) => {
  return (
    <ThankyouWrap {...props} >
      <div >
        <h1>Thank You!</h1>
        <p>
          Thank you signing up. We respect your donec gravida dui ac accumsan
          tempor. Phasellus vulputate cursus tempus.{" "}
        </p>
        <p>
          Your Reference code: <small>{props.ref_code}</small>
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Curabitur nec porttitor ante
        </p>
      </div>
      <WelcomeSVG style={{ height: "100%" }} />
    </ThankyouWrap>
  )
}

const ThankyouWrap = styled.div`
  width: auto;
  display: flex;
  max-width: 90%;
  height: 607px;
  background: #ffffff;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 90px;
  padding: 68px;
  h1,
  p {
    font-family: "Dosis";
    color: #253551;
    text-decoration: rgb(37, 53, 81);
  }

  h1 {
    width: 150px;
    height: 46px;
    font-size: 24px;
    margin-bottom: 49px;
  }

  p {
    width: 426px;
    height: 40px;
    font-size: 16px;
    margin-bottom: 53px;
    small{
        font-weight: bold;
        font-size: 19px;
        color: #ff6584;
    }
  }

  >div{
      flex: 1 1 auto;
  }
`;
export default ThankYouPage