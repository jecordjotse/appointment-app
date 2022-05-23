import React, { useImperativeHandle, forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/router";
import { FormItemWrap, LabelWrap, SendButton, TitleWrap } from "./loginStyles";
import Input from "../../input";
// import Input from "../../input";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	borderSize: "0px",
	borderRadius: "5px",
	boxShadow: 24,
	fill: "#ffffff",
	p: 4,
	boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
};

const _url =
	"http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";

const Login = (props, ref) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const router = useRouter();
	const handleSignIn = async (event) => {
		event.preventDefault();

		event.preventDefault();

		const res = await fetch(`${_url}/users/sign-in`, {
			body: JSON.stringify({
				username: event.target.username.value,
				password: event.target.password.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await res.json();
		//function to validate username
		//function to validate password

		console.log("The results: ", result);

		if (result && result.status === 200) {
			router.push("/dashboard");
		}
	};

	useImperativeHandle(ref, () => ({
		handleOpen() {
			setOpen(true);
		},
	}));
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Fade in={open}>
				<Box sx={style}>
					<TitleWrap
						id="modal-modal-title"
						variant="h6"
						component="h2">
						Sign In
					</TitleWrap>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<form onSubmit={handleSignIn}>
							<FormItemWrap>
								<LabelWrap htmlFor="username">
									Username
								</LabelWrap>
								<Input
									type="text"
									name="username"
									id="username"
									placeholder="e.g. dw_appoint_002"
									style={{ component: "input", style: {} }}
								/>
							</FormItemWrap>
							<FormItemWrap>
								<LabelWrap htmlFor="password">
									Username
								</LabelWrap>

								<Input
									type="password"
									name="password"
									id="password"
									placeholder="****"
									style={{ component: "input", style: {} }}
								/>
							</FormItemWrap>
							<SendButton
								variant="contained"
								type="submit"
								sx={{ width: 1 }}>
								Sign In
							</SendButton>
						</form>
					</Typography>
				</Box>
			</Fade>
		</Modal>
	);
};

export default forwardRef(Login);
