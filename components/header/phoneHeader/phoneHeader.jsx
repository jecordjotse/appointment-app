import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
	HeaderMainWrap,
	HeaderWrap,
	DropDownWrap,
	NavBar,
	NavItem,
	Wrapper,
} from "./phoneHeaderStyles";
import MenuIcon from "./menuIcon";
import { useRouter } from "next/router";
import { HeaderIcon, Brand } from "../headerStyles";

const PhoneHeader = ({ dashboardClick }) => {
	const router = useRouter();
	const myRef = useRef();
	const [showMenu, setShowMenu] = useState(false);
	const [activeNav, setActiveNave] = useState("/");
	const getRouter = () => {
		return router.asPath === activeNav;
	};
	const toggleMenu = (clicked) => {
		if ((clicked && showMenu) || (!clicked && !showMenu))
			setShowMenu(!showMenu);
	};

	const preventDefault = (e) => {
		e.preventDefault();
	};

	const preventDefaultForScrollKeys = (e) => {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	};
	// call this to Disable
	const disableScroll = () => {
		window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
		window.addEventListener(WheelEvent, preventDefault, wheelOpt); // modern desktop
		window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
		window.addEventListener("keydown", preventDefaultForScrollKeys, false);
	};

	// call this to Enable
	const enableScroll = () => {
		window.removeEventListener("DOMMouseScroll", preventDefault, false);
		window.removeEventListener(WheelEvent, preventDefault, wheelOpt);
		window.removeEventListener("touchmove", preventDefault, wheelOpt);
		window.removeEventListener(
			"keydown",
			preventDefaultForScrollKeys,
			false
		);
	};
	useEffect(() => {
		console.log(router.asPath);
		setActiveNave(router.asPath);
	}, [router]);

	useEffect(() => {
		if (showMenu) {
			document.getElementById("NavWrapper").style.background =
				"rgba(255, 255, 255, 0.5)";
			document.getElementsByTagName("html")[0].className =
				"disable-scroll";
		} else {
			document.getElementById("NavWrapper").style.background = "";
			document.getElementsByTagName("html")[0].className = "";
		}
	}, [showMenu]);
	return (
		<>
			<HeaderMainWrap>
				<HeaderWrap>
					<div>
						<Link href="/" passHref>
							<HeaderIcon
								src="/dromeworks.png"
								alt=""></HeaderIcon>
						</Link>
						<Link href="/" passHref>
							<Brand>Appointment App</Brand>
						</Link>{" "}
					</div>
					<MenuIcon ref={myRef} menuFunc={toggleMenu} />
				</HeaderWrap>
			</HeaderMainWrap>
			<DropDownWrap showMenu={showMenu}>
				<Wrapper
					id="NavWrapper"
					onClick={() => {
						setShowMenu(false);
						myRef.current.childMethod();
					}}></Wrapper>
				<NavBar
					onClick={() => {
						toggleMenu(true);
						myRef.current.childMethod();
					}}>
					<Link href="/" passHref>
						<NavItem
							className={router.pathname == "/" ? "active" : ""}>
							Home
						</NavItem>
					</Link>
					<Link href="/how-it-works" passHref>
						<NavItem
							className={
								router.pathname == "/how-it-works"
									? "active"
									: ""
							}>
							About
						</NavItem>
					</Link>
					<Link href="/book-an-appointment" passHref>
						<NavItem
							className={
								router.pathname == "/appointment"
									? "active"
									: ""
							}>
							Book
						</NavItem>
					</Link>
					<Link href="/appointments" passHref>
						<NavItem
							className={
								router.pathname == "/appointments"
									? "active"
									: ""
							}>
							Appointments
						</NavItem>
					</Link>
					<NavItem
						className={
							router.pathname == "/appointments" ? "active" : ""
						}
						onClick={() => dashboardClick()}>
						Dashboard
					</NavItem>
				</NavBar>
			</DropDownWrap>
		</>
	);
};

// export const SocialBar = () => {
// 	return (
// 		<SocialBarWrap>
// 			<Link href="https://web.facebook.com/jerome.eljay">
// 				<a>
// 					<FacebookIcon />
// 				</a>
// 			</Link>
// 			<Link href="https://github.com/jecordjotse">
// 				<a>
// 					<GithubIcon />
// 				</a>
// 			</Link>
// 			<Link href="https://www.linkedin.com/in/jerome-cordjotse">
// 				<a>
// 					<LinkedinIcon />
// 				</a>
// 			</Link>
// 			<Link href="https://twitter.com/Elorm_Jerome">
// 				<a>
// 					<TwitterIcon />
// 				</a>
// 			</Link>
// 			<Link href="https://www.instagram.com/elorm_jerome">
// 				<a>
// 					<InstagramIcon />
// 				</a>
// 			</Link>
// 		</SocialBarWrap>
// 	);
// };

export default PhoneHeader;
