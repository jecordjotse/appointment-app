import styled, { css } from "styled-components";

//Divs & Containers
export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: ${(props) => (props.hundred ? "100%" : "auto")};
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1120px;
  }
  @media (min-width: 1408px) {
    max-width: 1300px;
  }
  @media (min-width: 1700px) {
    max-width: 1600px;
  }
  @media (max-width: 600px) {
    padding: 0 5vw;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}
`;

export const Flex = styled.div`
  display: ${(props) => (props.inline ? "inline-flex" : "flex")};
  position: relative;
  align-items: center;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.vertical &&
    css`
      flex-direction: column;
    `};
  ${(props) =>
    props.top &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.wrapContainer &&
    css`
      flex-wrap: wrap;
    `};

  ${(props) =>
    props.vLeft &&
    css`
      align-items: flex-start;
    `};

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};

  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `};
  @media only screen and (max-width: 600px) {
    ${(props) =>
      props.verticalRPhone &&
      css`
        flex-direction: column-reverse;
      `};
  }
`;

export const Section = styled.section`
  padding: 100px 0 0;
  display: flex;
  align-items: ${(props) => (props.left ? "flex-start" : "center")};
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    padding: 100px 0 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gapPhone || "0"};
  grid-template-rows: auto;
  grid-template-columns: ${(props) =>
    typeof props.phoneNum === "object"
      ? `${props.phoneNum.toString()}`
      : `repeat(${props.phoneNum}, 1fr)`};
  align-items: ${(props) => (props.top ? "flex-start" : "center")};
  justify-items: ${(props) => (props.phoneLeft ? "flex-start" : "center")};
  @media only screen and (min-width: 600px) {
    grid-gap: ${(props) => props.gap || "150px"};
    grid-template-columns: ${(props) =>
      typeof props.num === "object"
        ? `${props.num.toString()}`
        : `repeat(${props.num}, 1fr)`};
    ${(props) =>
      props.auto &&
      css`
        grid-template-columns: auto;
      `};
    width: 100%;
    justify-items: ${(props) => (props.left ? "flex-start" : "center")};
  }
  ${({ oneColumnIPad }) =>
    oneColumnIPad &&
    css`
      @media only screen and (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    `}
`;
