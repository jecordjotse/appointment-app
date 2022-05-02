import styled, { css } from "styled-components";

export const HeaderWrap = styled.header`
  padding-left: 100px;
  padding-right: 100px;
  height: 65px;
  fill: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  position: fixed;
  width: auto;
  max-width: 90%;
  right: 0px;
  top: 0px;
  left: 0px;
  z-index: 999;
  background: white;
`;

export const HeaderIcon = styled.img`
  width: 54px;
  padding: 6px;
  background-image: /dromeworks.png;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const HeaderItem = css`
  width: auto;
  min-width: 100px;
  height: 30px;
  padding-button: 15px;
  font-family: Dosis;
  font-size: 21px;
  text-align: center;
  color: #253551;
  text-decoration: rgb(37, 53, 81);
  flex: 0 1 auto;
  cursor: pointer;
  &.active {
    &::after {
      content: "";
      position: absolute;
      height: 3px;
      width: 40%;
      max-width: 120px;
      background-color: black;
      top: 85%;
      left: 10px;
    }
  }
`;

export const HeaderLink = styled.a`
  ${HeaderItem};
`;

export const HeaderText = styled.p`
  ${HeaderItem};
`;

export const Brand = styled.div`
  width: auto;
  display: inline;
  font-family: "Dosis";
  font-size: 21px;
  padding: 15px;
  color: #6665dd;
  cursor: pointer;
  text-decoration: rgb(102, 101, 221);
`;

export const Nav = styled.nav`
  width: auto;
  display: inline-flex;
  font-family: "Dosis";
  padding: 15px;
  position: relative;
  right: 0;
  flex: 1;
  justify-content: right;
  flex-direction: row;
`;

export const SignInButton = styled.div`
  border-radius: 5px;
  padding: 5px 10px !important;
  border: 1px solid #253551;
  display: flex;
  align-items: center;

  svg {
    font-size: 1rem;
    color: #253551;
    margin-left: 5px;
  }
`;

export const DashboardButton = styled.button`
  width: auto;
  height: 49px;
  border-radius: 2px;
  border-width: 0px;
  background-color: #231736;
  font-family: Dosis;
  font-size: 21px;
  color: #efeaf6;
  padding: 10px;
  text-decoration: rgb(239, 234, 246);
  text-align: center;
  margin-top: -6px;
`;

/*
  > * {
    margin-left: 40px !important;
    padding: 8px 10px;
    border-radius: 5px;
    transition: 400ms ease-in-out;

    &:hover {
      background-color: #253551;
      color: #ffffff;
    }
  }

  > p:first-of-type {
    margin-left: 0;
  }*/
