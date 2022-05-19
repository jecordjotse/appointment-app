import Link from "next/link";
import styled, { keyframes, css } from "styled-components";

const dashSpin = keyframes`
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateX(5px) rotate(0deg);
  }
  75% {
    transform: translateX(13px) rotate(0deg);
  }
  100% {
    transform: translateX(13px) rotate(45deg);
  }
`;

export const MenuIconWrap = styled.a`
  width: 30px;
  display: block;
  margin: 1rem 0 0 1rem;
  transition: display 1s;

  ${(props) => {
    if (!props.clicked)
      return css`
        div {
          // transition: width 0.3s;
        }

        :hover div {
          width: 100%;
        }

        :hover div::after {
          width: 50%;
        }
        transition: display 1s 0.3s;
      `;
  }}

  }
`;

export const DashOne = styled.div`
  display: flex;
  ::before {
    width: 51%;
    height: 4px;
    background-color: black;
    content: "";
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    transform-origin: left top;
    transition: transform 0.3s, bottom 0.3s;
  }

  ::after {
    content: "";
    width: 51%;
    transform-origin: right top;
    height: 4px;
    background-color: black;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    transition: transform 0.2s, bottom 0.2s;
  }

  ${(props) => {
    if (props.clicked)
      return css`
        ::before {
          width: 25px;
          margin-right: -5px;
          transform: rotate(45deg);
          transform-origin: left bottom;
          transition: transform 0.3s 0.3s, width 0.3s 0.2s, top 0.3s 0.3s,
            margin-top 0.5s 0.3s;
        }

        ::after {
          width: 25px;
          transform: rotate(-45deg);
          transform-origin: right bottom;
          transition: transform 0.3s 0.3s, width 0.3s 0.2s, top 0.3s 0.3s;
        }
      `;
  }}
`;
export const DashTwo = styled.div`
  display: flex;
  height: 4px;
  width: 60%;
  background-color: black;
  margin: 5px 0;
  border-radius: 25px;
  position: relative;
  transition: width 0.3s 0.4s, transform 0.3s 0.2s, border-radius 0.3s 0.2s,
    margin 0.2s;

  ${(props) => {
    if (props.clicked)
      return css`
        width: 4px;
        border-radius: 0px;
        margin: 10px 0;
        animation-name: ${css`
          ${dashSpin}
        `};
        animation-duration: 0.6s;
        animation-iteration-count: initial;
        transform: translateX(13px) rotate(45deg);
        transition: width 0.3s, border-radius 0.1s, left 0.3s, margin 0.3s;
      `;
  }}
`;
export const DashThree = styled.div`
  display: flex;
  ::before {
    content: "";
    width: 51%;
    transform-origin: left top;
    height: 4px;
    background-color: black;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    transition: transform 0.3s, bottom 0.3s;
  }
  ::after {
    content: "";
    width: 30%;
    transform-origin: left top;
    height: 4px;
    background-color: black;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    transition: transform 0.3s, width 0.3s, bottom 0.3s;
  }

  ${(props) => {
    if (props.clicked)
      return `
    ::before {
      bottom: 0.4em;
      width: 25px;
      margin-right: -5px;
      transform: rotate(-45deg);
      transform-origin: left top;
      transition: transform 0.3s 0.3s, width 0.3s 0.3s, bottom 0.3s 0.3s;
    }
    
    ::after {
      bottom: 0.4em;
      width: 25px;
      transform: rotate(45deg);
      transform-origin: right top;
      transition: transform 0.3s 0.3s, width 0.3s 0.3s, bottom 0.3s 0.3s;
    }
    `;
  }}
`;
