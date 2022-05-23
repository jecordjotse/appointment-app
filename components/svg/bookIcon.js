import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
const color = ["rgba(154,77,168)", "rgba(37, 53, 81)"];
const BookIconSvg = (props) => {
	const [colorSwap, setColorSwap] = useState(true);
	const [animate, setAnimate] = useState(false);
	const [animationControl, setAnimationControl] = useState({
		retractSleeve: false,
		showSleeve: false,
		moveApart: false,
		moveClose: false,
		swap: false,
	});
	const swap = (node1, node2) => {
		console.log(node1.parentNode);
		const clonedElement1 = node1.cloneNode(true);
		const clonedElement2 = node2.cloneNode(true);
		let parentNode = node2.parentNode;
		node2.parentNode.replaceChild(clonedElement1, node2);
		console.log(parentNode);
		node1.parentNode.replaceChild(clonedElement2, node1);
		console.log(parentNode);
	};

	const insertKeyFrame = () => {
		let styleSheet = document.styleSheets[0];

		let keyframs = `@-webkit-keyframes sleeveRetract{
			0% { d: path("M160 30h74v120l-37-22-37 22V30Z"); } 
			10% { d: path(
				"M160 30h74s-.3.4-.5.7c-.2.2-.2.7-.2 1.1l2.1 118.2l-37.385-22l-36.615 22L159.3 31.8c0-.4.1-1 .2-1.1c.2-.3.5-.7.5-.7Z"
			); } 
			100% { d: path("M160 30h74s-1.1.3-1.5.7c-.2.2-.6.7-.6 1.1l.128 22l-37.128-22l-36.872 22L157.9 31.8c0-.4.4-.9.6-1.1c.4-.4 1.5-.7 1.5-.7Z"); } 
		}
		@-webkit-keyframes sleeveShow{
			0% { d: path("M160 30h74s-1.1.3-1.5.7c-.2.2-.6.7-.6 1.1l.128 22l-37.128-22l-36.872 22L157.9 31.8c0-.4.4-.9.6-1.1c.4-.4 1.5-.7 1.5-.7Z"); } 
			90% { d: path(
				"M160 30h74s-.3.4-.5.7c-.2.2-.2.7-.2 1.1l2.1 118.2l-37.385-22l-36.615 22L159.3 31.8c0-.4.1-1 .2-1.1c.2-.3.5-.7.5-.7Z"
			); } 
			100% { d: path("M160 30h74v120l-37-22-37 22V30Z"); } 
		}`;
		styleSheet.insertRule(
			"@keyframe blanc { from{color: white} }",
			styleSheet.cssRules.length
		);
		console.log("Here", styleSheet);
	};

	const handleColorSwap = (e) => {
		insertKeyFrame();
		e.target.parentElement.children[2].style.animation = `sleeveRetract 1s ease-out 0s 1 forwards`;
		const myTimeout1 = setTimeout(() => {
			e.target.parentElement.children[0].style.transform =
				"translate(-115px,0)";
			e.target.parentElement.children[1].style.transform =
				"translate(115px,0)";
		}, 700);
		const myTimeout2 = setTimeout(() => {
			swap(
				e.target.parentElement.children[0],
				e.target.parentElement.children[1]
			);

			e.target.parentElement.children[0].style.transition = "0.2s";
			e.target.parentElement.children[1].style.transition = "0.2s";
			setTimeout(() => {
				e.target.parentElement.children[0].style.transform =
					"translate(0,0)";
				e.target.parentElement.children[1].style.transform =
					"translate(0,0)";
				setTimeout(() => {
					e.target.parentElement.children[2].style.animation = `sleeveShow 1s ease-out 0s 1 forwards`;
				}, 10);
			}, 10);
		}, 980);
		e.target.onmouseleave = () => {
			clearTimeout(myTimeout1);
			clearTimeout(myTimeout2);
			e.target.parentElement.children[0].style.transition = "0.2s";
			e.target.parentElement.children[1].style.transition = "0.2s";
			setTimeout(() => {
				e.target.parentElement.children[0].style.transform =
					"translate(0,0)";
				e.target.parentElement.children[1].style.transform =
					"translate(0,0)";
			}, 5);
		};
	};
	useEffect(() => {
		console.log("About to move apart", animationControl);
		if (
			animationControl.retractSleeve &&
			!animationControl.moveApart &&
			!animationControl.moveClose
		) {
			const myTime1 = setTimeout(() => {
				console.log("Moving apart", animationControl);
				setAnimationControl({
					...animationControl,
					moveApart: true,
				});
				const myTime2 = setTimeout(() => {
					console.log("Moving close", animationControl);
					setAnimationControl({
						...animationControl,
						moveApart: false,
						moveClose: true,
					});
					clearTimeout(myTime2);
				}, 990);
			}, 990);
		}

		console.log("Ready", animationControl);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [animate]);

	return (
		<SVG
			viewBox="0 0 500 300"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			retractSleeve={animationControl.retractSleeve}
			showSleeve={animationControl.showSleeve}
			moveApart={animationControl.moveApart}
			moveClose={animationControl.moveClose}>
			<path
				id="sheet1"
				d="M338.836 1.94H161.164c-16.286 0-29.612 13.326-29.612 29.612v236.896c0 16.286 13.326 29.612 29.612 29.612h177.672c16.286 0 29.612-13.326 29.612-29.612V31.552c0-16.286-13.326-29.612-29.612-29.612Z"
				style={{
					fill: "rgba(154,77,168,0.8)",
				}}
				colorSwap={color[Number(colorSwap)]}
				vectorEffect="non-scaling-stroke"
			/>
			<path
				id="sheet2"
				d="M338.836 1.94H161.164c-16.286 0-29.612 13.326-29.612 29.612v236.896c0 16.286 13.326 29.612 29.612 29.612h177.672c16.286 0 29.612-13.326 29.612-29.612V31.552c0-16.286-13.326-29.612-29.612-29.612Z"
				style={{
					fill: "rgba(37, 53, 81, 0.9)",
				}}
				colorSwap={color[Number(!colorSwap)]}
				vectorEffect="non-scaling-stroke"
			/>
			<path
				id="sleeve"
				style={{
					fill: "#fff",
				}}
			/>
			<rect
				x="130"
				width="240"
				height="300"
				fill="rgba(255,255,255,0)"
				onMouseEnter={() => {
					console.log("Mouse Enter");
					setAnimate(!animate);
					setAnimationControl({
						...animationControl,
						retractSleeve: true,
						showSleeve: false,
					});
				}}
				onMouseLeave={() => {
					setAnimate(!animate);
					setAnimationControl({
						...animationControl,
						retractSleeve: false,
						showSleeve: false,
						moveApart: false,
						moveClose: false,
						swap: false,
					});
				}}
			/>
		</SVG>
	);
};

const moveToLeftOverlay = keyframes`{
	from { transform: translate(0px,0); } 
	to { transform: translate(-100px,0); } 
}`;
const moveFromLeftOverlay = keyframes`{
	from { transform: translate(-100px,0); } 
	to { transform: translate(0,0); } 
}`;
const moveRightOverlay = keyframes`{
	0% { transform: translate(100px,0); } 
	100% { transform: translate(0,0); } 
}`;
const sleeveRetract = keyframes`{
	0% { d: path("M160 30h74v120l-37-22-37 22V30Z"); } 
	10% { d: path(
		"M160 30h74s-.3.4-.5.7c-.2.2-.2.7-.2 1.1l2.1 118.2l-37.385-22l-36.615 22L159.3 31.8c0-.4.1-1 .2-1.1c.2-.3.5-.7.5-.7Z"
	); } 
	100% { d: path("M160 30h74s-1.1.3-1.5.7c-.2.2-.6.7-.6 1.1l.128 22l-37.128-22l-36.872 22L157.9 31.8c0-.4.4-.9.6-1.1c.4-.4 1.5-.7 1.5-.7Z"); } 
}`;
const sleeveShow = keyframes`{
	0% { d: path("M160 30h74s-1.1.3-1.5.7c-.2.2-.6.7-.6 1.1l.128 22l-37.128-22l-36.872 22L157.9 31.8c0-.4.4-.9.6-1.1c.4-.4 1.5-.7 1.5-.7Z"); } 
	90% { d: path(
		"M160 30h74s-.3.4-.5.7c-.2.2-.2.7-.2 1.1l2.1 118.2l-37.385-22l-36.615 22L159.3 31.8c0-.4.1-1 .2-1.1c.2-.3.5-.7.5-.7Z"
	); } 
	100% { d: path("M160 30h74v120l-37-22-37 22V30Z"); } 
}`;

const SVG = styled.svg`
	path#sheet1 {
		${(props) =>
			css`
				transform: translate(0px, 0);
			`}
	}

	path#sheet2 {
		opacity: 80%;
		position: relative;
		transform: translate(0px, 0);
		transition: 0.2s ease-in;
	}

	// :hover {
	// 	path#sheet2 {
	// 		opacity: 80%;
	// 		animation-name: ${css`
		// 			${moveRightOverlay}
		//
	`};
	// 		animation-duration: 1s;
	// 	}
	// }

	path#sleeve {
		${(props) =>
			!props.retractSleeve &&
			css`
				d: path("M160 30h74v120l-37-22-37 22V30Z");
			`}
		${(props) =>
			!!props.retractSleeve &&
			!props.showSleeve &&
			css`
				opacity: 0%;
				transition: opacity 0.1s 1s;
				animation: ${css`
						${sleeveRetract}`} 1s ease-out 0s 1 forwards;
			`}
		${(props) =>
			!props.retractSleeve &&
			!props.showSleeve &&
			css`
				opacity: 100%;
				animation: ${css`
						${sleeveShow}`} 1s ease-out 0s 1 forwards;
			`}
	}
`;

export default BookIconSvg;
