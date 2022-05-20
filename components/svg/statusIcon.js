import React from "react";
import styled from "styled-components";

const StatusIconSvg = (props) => {
	return (
		<SVG
			viewBox="0 0 300 300"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<rect
				id="firstRect"
				x={75}
				y={25}
				width={150}
				height={250}
				style={{
					fill: "rgba(154, 77, 168, 0.8)",
				}}
			/>
			<rect
				id="secRect"
				x={-60}
				y={60}
				width={120}
				height={200}
				style={{
					fill: "rgba(77, 110, 168, 0.9)",
				}}
			/>
			<rect
				id="thirdRect"
				x={240}
				y={60}
				width={120}
				height={200}
				style={{
					fill: "rgba(148, 168, 77, 0.9)",
				}}
			/>
			<rect
				id="forRect"
				x={-140}
				y={60}
				width={120}
				height={200}
				style={{
					fill: "rgba(148, 168, 77, 0.9)",
				}}
			/>
		</SVG>
	);
};

const SVG = styled.svg`
	rect#firstRect {
		transition: 0.8s 0.2s ease-out;
	}
	:hover {
		> rect#firstRect {
			transform: translate(180px, 45px) scale(0.8);
			transition: 0.8s 0.1s ease-out;
			fill: "rgba(154, 77, 168, 0.9)";
		}
	}
	rect#secRect {
		transition: 0.8s 0.1s ease-out;
	}
	:hover {
		> rect#secRect {
			transform: translate(150px, -45px) scale(1.25);
			transition: 0.8s 0.2s ease-out;
			fill: "rgba(77, 110, 168, 0.8)";
		}
	}
	rect#thirdRect {
		transition: 0.8s 0.3s ease-out;
	}
	:hover {
		> rect#thirdRect {
			transform: translate(185px, 25px) scale(0.7);
			transition: 0.8s 0s ease-out;
			fill: "rgba(148, 168, 77, 0.9)";
		}
	}
	rect#forRect {
		transition: 0.8s ease-out;
	}
	:hover {
		> rect#forRect {
			transform: translate(80px, 0px);
			transition: 0.8s 0.3s ease-out;
			fill: "rgba(148, 168, 77, 0.9)";
		}
	}
`;

export default StatusIconSvg;
