import React from "react";
import Footer from "../components/footer";
import Input from "../components/input";
import AppointmentIconSvg from "../components/svg/appointmentIcon";
import BookIconSvg from "../components/svg/bookIcon";
import InteractIconSvg from "../components/svg/interactIcon";
import StatusIconSvg from "../components/svg/statusIcon";

const InputsPlaygroundPage = () => {
	return (
		<>
			<div style={{ display: "flex" }}>
				<div
					style={{
						"margin-top": "90px",
						display: "grid",
						justifyContent: "center",
					}}>
					{/* <div
						style={{
							background: "white",
							width: "600px",
							padding: "10px 50px 0 20px",
						}}>
						<Input
							type="text"
							placeholder={"Hello"}
							label="Text Input Main input"
							style={{ component: "input", style: {} }}
						/>
						<Input
							type="select"
							label="Text Input"
							options={[]}
							style={{ component: "input", style: {} }}
						/>
						<Input
							type="text-area"
							placeholder={"Hello"}
							label="Text Input"
							style={{ component: "input", style: {} }}
						/>
						<Input
							type="radio"
							placeholder={"Hello"}
							label="Text Input"
							style={{ component: "input", style: {} }}
						/>
						<div style={{ width: "144px" }}>
							<Input
								placeholder={"Footer Inpus"}
								label=""
								location={"footer"}
								style={{ component: "input", style: {} }}
							/>
						</div>
					</div> */}
				</div>
				<div
					style={{
						top: "10vw",
						margin: "auto",
						width: "150px",
						position: "relative",
					}}>
					<StatusIconSvg />
				</div>
				<div
					style={{
						top: "10vw",
						margin: "auto",
						width: "150px",
						position: "relative",
					}}>
					<AppointmentIconSvg />
				</div>
			</div>
		</>
	);
};

export default InputsPlaygroundPage;
