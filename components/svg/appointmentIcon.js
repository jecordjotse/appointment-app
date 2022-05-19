import React from "react";
import styled, { keyframes, css } from "styled-components";

const AppointmentIconSvg = (props) => {
	return (
		<SVG
			viewBox="0 0 300 300"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				id="firstBox"
				d="m140.22 168.339.744-36.72V66.975h92.257v71.659h-59.157l-33.844 29.705Z"
				// d="m143.04 149.593 1.025-50.612v-89.1h127.168v98.768h-81.538l-46.655 40.944Z"
				style={{
					fill: "rgba(103,101,221,.9)",
				}}
			/>
			<path
				id="secBox"
				d="m140.22 168.339.744-36.72V66.975h92.257v71.659h-59.157l-33.844 29.705Z"
				style={{
					fill: "rgba(160,97,106,.9)",
				}}
			/>
			<path
				id="thirdBox"
				d="m140.22 168.339.744-36.72V66.975h92.257v71.659h-59.157l-33.844 29.705Z"
				// d="m137.147 178.835.309-15.281V136.67h38.376v29.803h-24.611l-14.074 12.362Z"
				style={{
					fill: "rgba(103,101,221,.9)",
				}}
			/>
			<path
				id="phone"
				d="M262.252 199.11c-17.539 0-34.377-2.806-50.092-7.998-4.911-1.543-10.384-.421-14.312 3.368l-30.87 30.869c-39.709-20.205-72.262-52.618-92.468-92.327l30.87-31.01c3.929-3.788 5.051-9.261 3.508-14.172-5.192-15.715-7.998-32.553-7.998-50.092 0-7.718-6.315-14.032-14.032-14.032h-49.11c-7.718 0-14.032 6.314-14.032 14.032 0 131.756 106.78 238.536 238.536 238.536 7.718 0 14.032-6.314 14.032-14.032v-49.11c0-7.717-6.314-14.032-14.032-14.032Z"
				style={{
					fill: "#253551",
				}}
				vectorEffect="non-scaling-stroke"
			/>
		</SVG>
	);
};

const wiggle = keyframes`{
	0% { transform: rotate(9deg); } 
	10% { transform: rotate(-8deg); } 
	20% { transform: rotate(7deg); } 
	30% { transform: rotate(-6deg); } 
	40% { transform: rotate(5deg); } 
	50% { transform: skewX(-4deg); } 
	60% { transform: skewX(3deg); } 
	70% { transform: skewX(-2deg); } 
	80% { transform: skewX(1deg); } 
	90% { transform: skewX(0deg); } 
	100% { transform: skewX(0deg); } 
 } `;
const SVG = styled.svg`
	path#firstBox {
		transform-origin: 140px 167px;
		transform: scale(2);
		transition: transform 0.5s, opacity 0.7s;
	}
	path#secBox {
		transform-origin: 140px 167px;
		transition: transform 0.5s, opacity 0.7s;
	}
	path#thirdBox {
		transform-origin: 100px 167px;
		transform: scale(0.1) translate(100px, 550px);
		transition: transform 0.5s, opacity 0.7s;
	}
	:hover {
		path#phone {
			transform-origin: 100px 190px;
			animation-name: ${css`
				${wiggle}
			`};
			animation-duration: 1s;
		}

		path#firstBox {
			transform-origin: 140px 167px;
			transform: scale(3) translate(50px, -50px);
			opacity: 30%;
		}
		path#secBox {
			transform-origin: 140px 187px;
			transform: scale(2);
		}
		path#thirdBox {
			transform: translate(0, -15px) scale(1);
		}
	}
`;

export default AppointmentIconSvg;
