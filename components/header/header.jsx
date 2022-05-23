import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
	Brand,
	DashboardButton,
	HeaderBackground,
	HeaderIcon,
	HeaderLink,
	HeaderWrap,
	Nav,
} from "./headerStyles";
import {
	ClickAwayListener,
	Popper,
	Grow,
	Button,
	Paper,
	MenuItem,
	MenuList,
} from "@mui/material";
import PhoneHeader from "./phoneHeader";
import Login from "../modalComponent/login";
const Header = () => {
	const [open_, setOpen_] = useState(false);
	const anchorRef = useRef(null);
	const loginRef = useRef();

	const handleToggle = () => {
		setOpen_((prevOpen) => !prevOpen);
	};

	const handleMenuClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen_(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen_(false);
		} else if (event.key === "Escape") {
			setOpen_(false);
		}
	}
	// return focus to the button when we transitioned from !open -> open
	const prevOpen = useRef(open_);
	useEffect(() => {
		if (prevOpen.current === true && open_ === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open_;
	}, [open_]);

	return (
		<>
			<HeaderBackground>
				<PhoneHeader dashboardClick={loginRef.current?.handleOpen} />
				<HeaderWrap>
					<Link href="/" passHref>
						<HeaderIcon src="/dromeworks.png" alt=""></HeaderIcon>
					</Link>
					<Link href="/" passHref>
						<Brand>Appointment App</Brand>
					</Link>{" "}
					<Nav>
						<Link href="/how-it-works" passHref>
							<HeaderLink>About</HeaderLink>
						</Link>{" "}
						<HeaderLink
							ref={anchorRef}
							id="composition-button"
							aria-controls={
								open_ ? "composition-menu" : undefined
							}
							aria-expanded={open_ ? "true" : undefined}
							aria-haspopup="true"
							onClick={handleToggle}>
							Menu
						</HeaderLink>
						<Popper
							open={open_}
							anchorEl={anchorRef.current}
							role={undefined}
							placement="bottom-start"
							transition
							disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{
										transformOrigin:
											placement === "bottom-start"
												? "left top"
												: "left bottom",
									}}>
									<Paper>
										<ClickAwayListener
											onClickAway={handleMenuClose}>
											<MenuList
												autoFocusItem={open_}
												id="composition-menu"
												aria-labelledby="composition-button"
												onKeyDown={handleListKeyDown}>
												<MenuItem
													onClick={handleMenuClose}>
													<Link
														href="/book-an-appointment/1"
														passHref>
														<HeaderLink>
															Book
														</HeaderLink>
													</Link>
												</MenuItem>
												<MenuItem
													onClick={handleMenuClose}>
													<Link
														href="/appointments"
														passHref>
														<HeaderLink>
															Appointments
														</HeaderLink>
													</Link>
												</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
						<DashboardButton
							variant="contained"
							content="initial-scale=1, width=device-width"
							onClick={() => loginRef.current.handleOpen()}>
							Dashboard
						</DashboardButton>
					</Nav>
				</HeaderWrap>
			</HeaderBackground>
			<Login ref={loginRef} />
		</>
	);
};

export default Header;
