import styled from "styled-components";
import { styled as st } from "@mui/system";
import { Button } from "@mui/material";

export const BookAppointment1Wrap = styled.div`
  width: 452px;
  fill: #ffffff;
  padding: 0 30px 10px 24px;
  flex: 1 1 auto;
`;

export const TitleWrap = styled.h2`
  width: 398px;
  height: 33px;
  font-family: Abel;
  font-size: 48px;
  font-weight: lighter;
  color: #253551;
  text-decoration: rgb(37, 53, 81);
  padding: 0 5px 0 5px;
`;

export const FormItemWrap = styled.div`
  width: 398px;
  padding: 0px 8px;
  font-family: Dosis;
  text-decoration: rgb(37, 53, 81);
  margin-top: 10px;
`;

export const LabelWrap = styled.div`
  height: 31px;
  font-family: Dosis;
  font-size: 24px;
  color: #231736;
  text-decoration: rgb(35, 23, 54);
`;

export const SendButton = st(Button)({
  height: "85px",
  position: "relative",
  "z-index": "2",
  width: "432px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (props) => {
    return props.borderColor
      ? props.borderColor
      : (props) =>
          typeof props.location !== "undefined"
            ? () => {
                switch (props.location) {
                  case "footer":
                    return "#8c8c8c";
                }
              }
            : "#253551";
  },
  borderRadius: "5px",
  transition: "400ms ease-in-out",
  transformOrigin: "top left",
  position: "relative",
  outline: "none",
  fontSize: "14px",
  padding: "6px 15px 6px 15px",
  cursor: "pointer",

  "~ label": {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  "&:active, &:focus": {
    border: "1px solid black",
    "~ label ": {
      transform: "translateY(-20px)",
      fontWeight: "lighter",
      fontSize: "24px",
      color: "#231736",
    },
  },
  color: "#ffffff",
  backgroundColor: "#253551",
});
