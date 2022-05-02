import React from "react";
import Content1Component from "./content1Component";
import Content2Component from "./content2Component ";
import { AboutWrap } from "./howItWOrksStyles";
import IntroComponent from "./introComponent";

const HowItWorksComponent = () => {
	return (
		<AboutWrap>
			<IntroComponent />
			<Content1Component />
			<Content2Component />
		</AboutWrap>
	);
};

export default HowItWorksComponent;
