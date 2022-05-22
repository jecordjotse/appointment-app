import React from "react";
import Input from "../input";
import { FooterWrap } from "./footerStyles";

const Footer = () => {
	return (
		<FooterWrap>
			<div style={{ display: "flex" }}>
				<div
					style={{
						display: "grid",
						maxWidth: "500px",
						minWidth: "200px",
						marginRight: "10px",
					}}>
					<div style={{ display: "flex" }}>
						<Input
							style={{
								component: "input",
								style: { display: "grid", justifyItems: "let" },
							}}
							type="text"
							name="name"
							id="footerName"
							location={"footer"}
							placeholder="name"
						/>
						<Input
							style={{
								component: "input",
								style: {
									display: "grid",
									justifyItems: "right",
								},
							}}
							type="email"
							name="name"
							id="footerEmail"
							location={"footer"}
							placeholder="email"
						/>
					</div>
					<Input
						type="text-area"
						row="10"
						placeholder="We'd love to hear from you"
						location={"footer"}
					/>
				</div>
				<div>
					<button
						type="submit"
						style={{
							width: "100%",
							height: "calc(100% - 10px)",
							marginTop: "10px",
						}}>
						Send
					</button>
				</div>
			</div>
			<div style={{ justifyContent: "center", display: "flex" }}>
				©2022 DROMEWORKS
			</div>
		</FooterWrap>
	);
};

export default Footer;
