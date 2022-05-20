import { Select } from "@mui/material";
import styled, { css } from "styled-components";
// import { palette, typeScale } from "../../utils";
import { Flex } from "../../styles/appGlobal";

export const InputWrap = styled.div`
	position: relative;
	border-radius: 5px;

	label {
		width: auto;
		height: 31px;
		font-family: Dosis;
		font-size: 24px;
		color: #231736;
		text-decoration: rgb(35, 23, 54);
		transition: 400ms ease-in-out;
	}

	svg {
		font-size: 1.4rem;
		color: #253551;
		position: absolute;
		top: calc(50% - 0.7rem);
		right: 20px;
	}

	.select-arrow {
		cursor: pointer;
		z-index: 1;
	}
`;

const FormFieldStyle = css`
	width: ${(props) =>
		typeof props.location !== "undefined"
			? () => {
					switch (props.location) {
						case "footer":
							return "calc(90% - 40px)";
					}
			  }
			: "100%"};
	border-width: 1px;
	border-style: solid;
	border-color: ${(props) =>
		props.borderColor
			? props.borderColor
			: (props) =>
					typeof props.location !== "undefined"
						? () => {
								switch (props.location) {
									case "footer":
										return "#8c8c8c";
								}
						  }
						: "#253551"};
	border-radius: 5px;
	transition: 400ms ease-in-out;
	transform-origin: top left;
	position: relative;
	outline: none;
	font-size: 14px;
	padding: 6px 15px 6px 15px;
	cursor: pointer;

	~ label {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	&:active,
	&:focus {
		border: 1px solid black;

		~ label {
			transform: translateY(-20px);
			font-weight: lighter;
			font-size: 24px;
			color: #231736;
		}
	}

	background-color: ${(props) =>
		typeof props.location !== "undefined"
			? () => {
					switch (props.location) {
						case "footer":
							return "#ffffff";
					}
			  }
			: "#efeaf6"};
`;

export const InputContainer = styled.input`
	box-sizing: border-box;
	${FormFieldStyle};
	height: ${(props) =>
		typeof props.location !== "undefined"
			? () => {
					switch (props.location) {
						case "footer":
							return "20px";
					}
			  }
			: "70px"};
`;

export const SelectContainer = styled.select`
	${FormFieldStyle};
	height: ${(props) =>
		typeof props.location !== "undefined"
			? () => {
					switch (props.location) {
						case "footer":
							return "20px";
					}
			  }
			: "85px"};
	background: transparent;
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
	position: relative;
	z-index: 2;
`;

export const TextAreaWrap = styled(Flex)`
	align-items: flex-start;
	margin: 10px 0 0 0;

	label {
		width: auto;
		height: 31px;
		font-family: Dosis;
		font-size: 24px;
		color: #231736;
		text-decoration: rgb(35, 23, 54);
		transition: 400ms ease-in-out;
	}

	textarea {
		width: ${(props) =>
			typeof props.location !== "undefined"
				? () => {
						switch (props.location) {
							case "footer":
								return "calc(99% - 20px)";
						}
				  }
				: "100%"};
		border-width: 1px;
		border-style: solid;
		border-color: ${(props) =>
			props.borderColor
				? props.borderColor
				: (props) =>
						typeof props.location !== "undefined"
							? () => {
									switch (props.location) {
										case "footer":
											return "#8c8c8c";
									}
							  }
							: "#253551"};
		border-radius: 5px;
		margin-top: 10px;
		position: relative;
		outline: none;
		font-size: 14px;
		padding: 10px;
		line-height: 150%;
		background-color: ${(props) =>
			typeof props.location !== "undefined"
				? () => {
						switch (props.location) {
							case "footer":
								return "#ffffff";
						}
				  }
				: "#efeaf6"};

		&:active,
		&:focus {
			border: 1px solid black;
		}
	}
`;

export const InputMainWrap = styled.div`
	margin-top: 10px;
	width: ${(props) => (props.fixed ? props.fixed : "100%")};
`;

export const ErrorText = styled.p`
	color: red;
	height: 10px;
	margin: 5px 0;
	svg {
		margin-right: 5px;
	}
`;

export const RadioWrap = styled.div`
	position: relative;
`;

export const RadioInput = styled.input`
	width: 25px;
	height: 25px;
	position: relative;
	z-index: 2;
	opacity: 0;
	cursor: pointer;

	&:checked ~ div {
		background-color: #231736;
		border-color: #231736;
	}
`;

export const FalseRadio = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid #efeaf6;
	position: absolute;
	background-color: white;
	top: 0;
	left: 0;
	z-index: 1;
`;

export const Arrow = styled.div`
	border: solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	position: absolute;
	right: 10px;
	top: calc(100% / 2.4);
	transform: rotate(45deg);
	transition: 0.3s;
	${(props) => {
		if (props.clicked)
			return css`
				transform: rotate(-135deg);
			`;
	}};
`;

export const SelectContainer1 = styled(Select)`
	${FormFieldStyle};
	padding: 6px 15px 6px 5px;
	height: ${(props) =>
		typeof props.location !== "undefined"
			? () => {
					switch (props.location) {
						case "footer":
							return "20px";
					}
			  }
			: "85px"};
	background: transparent;
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
	position: relative;
	z-index: 2;
`;
