import styled, { css } from "styled-components";

export const HeaderWrap = styled.header`
  padding: 15px 5px;
  height: 85px !important;
  position: relative;
  width: auto;
  z-index: 99;
  display: flex;
  transition: background 400ms ease-in-out;
  border-bottom: 1px solid transparent;
  top: 0;
  left: 0;
`;

const HeaderItem = css`
  font-weight: 600;
  margin: 0;
  color: black;
  position: relative;

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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
  width: 30vw;
  left: 0;
  position: absolute;
  img {
    width: 30px;
    margin-right: 10px;
  }

  h5 {
    margin: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50vw;
  right: 0;
  position: absolute;
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
  }
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
