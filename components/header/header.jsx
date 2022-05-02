import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
	Brand,
	DashboardButton,
	HeaderIcon,
	HeaderLink,
	HeaderWrap,
	Nav,
} from "./headerStyles";
import {
	ClickAwayListener,
	Popper,
	Grow,
	Paper,
	Button,
	MenuItem,
	MenuList,
} from "@mui/material";
const Header = () => {
	const [open_, setOpen_] = useState(false);
	const anchorRef = useRef(null);

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
					<Button
						ref={anchorRef}
						id="composition-button"
						aria-controls={open_ ? "composition-menu" : undefined}
						aria-expanded={open_ ? "true" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
						style={{
							display: "block",
							textTransform: "none",
							fontFamily: "Dosis",
							fontSize: "21px",
							color: "#253551",
							padding: "0px 0px 1px 0px",
							height: "30px",
							minWidth: "100px",
						}}
					>
            Menu
					</Button>
					<Popper
						open={open_}
						anchorEl={anchorRef.current}
						role={undefined}
						placement="bottom-start"
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleMenuClose}>
										<MenuList
											autoFocusItem={open_}
											id="composition-menu"
											aria-labelledby="composition-button"
											onKeyDown={handleListKeyDown}
										>
											<MenuItem onClick={handleMenuClose}>
												<Link href="/book-an-appointment/1" passHref>
													<HeaderLink>Book</HeaderLink>
												</Link>
											</MenuItem>
											<MenuItem onClick={handleMenuClose}>
												<Link href="/appointments" passHref>
													<HeaderLink>Appointments</HeaderLink>
												</Link>
											</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
					<Link href="/sign-in" passHref>
						<DashboardButton
							variant="contained"
							content="initial-scale=1, width=device-width"
						>
              Dashboard
						</DashboardButton>
					</Link>
				</Nav>
			</HeaderWrap>
		</>
	);
};

export default Header;
