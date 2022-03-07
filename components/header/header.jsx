import React from 'react';
import Link  from "next/link";
import { Brand, HeaderLink, HeaderWrap, Nav, SignInButton } from './headerStyles';
import Button from '@mui/material/Button'
const Header = () => {
  return (
    <>
    <HeaderWrap>
        <Link href="/">
          <Brand>Appointment App</Brand>
        </Link>{" "}

      <Nav>
        <Link href="/how-it-works">
          <HeaderLink>About</HeaderLink>
        </Link>{" "}
        <Link href="/book-an-appointment/1">
          <HeaderLink>Book</HeaderLink>
        </Link>{" "}
        <Link href="/appointments">
          <HeaderLink>Check Appointments</HeaderLink>
        </Link>{" "}
        <Link href="/sign-in" passHref>
          <Button variant="contained" content="initial-scale=1, width=device-width">SIGN-IN</Button>
        </Link>
      </Nav>
      </HeaderWrap>
    </>
  );
};

export default Header;
