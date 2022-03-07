import styled, { css } from 'styled-components';
import { palette, typeScale } from '../../utils';
import { Flex, Small } from '../../globals/appGlobal';

export const InputWrapper = styled.div`
	position: relative;
	background: white;
	border-radius: 10px;

	label {
		transition: 400ms ease-in-out;
		color: #a0a0a0;
		font-size: ${typeScale.paragraph};
		text-transform: capitalize;
		position: absolute;
		top: calc(50% - 0.5rem);
		left: 20px;
		cursor: pointer;
	}

	svg {
		font-size: 1.4rem;
		color: ${palette.grey};
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
	width: 100%;
	border: 1px solid ${palette.lightGrey};
	height: 70px;
	border-radius: 10px;
	transition: 400ms ease-in-out;
	transform-origin: top left;
	position: relative;
	outline: none;
	font-size: ${typeScale.paragraph};
	padding: 6px 20px 6px 20px;
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
			font-weight: 600;
			font-size: ${typeScale.small};
			color: black;
		}
	}
`;

export const InputContainer = styled.input`
	${FormFieldStyle};
`;

export const SelectContainer = styled.select`
	${FormFieldStyle};
	background: transparent;
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
	position: relative;
	z-index: 2;
`;

export const TextAreaWrapper = styled(Flex)`
	align-items: flex-start;
	margin: 20px 0 0;

	textarea {
		width: 100%;
		border: 1px solid ${palette.lightGrey};
		border-radius: 10px;
		margin-top: 10px;
		position: relative;
		outline: none;
		font-size: ${typeScale.paragraph};
		padding: 10px;
		line-height: 150%;

		&:active,
		&:focus {
			border: 1px solid black;
		}
	}
`;

export const InputMainWrapper = styled.div`
	margin-bottom: 10px;
	width: ${props => (props.fixed ? props.fixed : '100%')};
`;

export const ErrorText = styled(Small)`
	color: red;
	height: 0.8rem;

	svg {
		margin-right: 5px;
	}
`;

export const RadioWrapper = styled.div`
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
		background-color: ${palette.green};
		border-color: ${palette.green};
	}
`;

export const FalseRadio = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid ${palette.darkGrey};
	position: absolute;
	background-color: white;
	top: 0;
	left: 0;
	z-index: 1;
`;
