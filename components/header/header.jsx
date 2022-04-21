import React, {useState} from 'react';
import Link  from "next/link";
import { Brand, DashboardButton, HeaderIcon, HeaderLink, HeaderWrap, Nav, SignInButton } from './headerStyles';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <HeaderWrap>
      <Link href="/" passHref>
        <HeaderIcon src="/dromeworks.png" alt="" >
        </HeaderIcon>
      </Link>
      <Link href="/" passHref>
        <Brand>Appointment App</Brand>
      </Link>{" "} 
      <Nav>
        <Link href="/how-it-works" passHref>
          <HeaderLink>About</HeaderLink>
        </Link>{" "}
        <Link href="javascript:void(0);" passHref> 
          <HeaderLink>
            <div
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
              >
                Menu
              </div>
          <Menu
            id="basic-menu"
            sx={{width: 300,height: 300}}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
               onMouseLeave: handleClose,
            }}
            className="MenuItem"
          >
            <MenuItem onClick={handleClose}>
        <Link href="/book-an-appointment/1" passHref>
          <HeaderLink>Book</HeaderLink>
        </Link></MenuItem>
            <MenuItem onClick={handleClose}>
        <Link href="/appointments" passHref>
          <HeaderLink>Appointments</HeaderLink>
        </Link></MenuItem>
          </Menu>
          </HeaderLink>
        </Link>{" "}{" "}
        <Link href="/sign-in" passHref>
          <DashboardButton variant="contained" content="initial-scale=1, width=device-width">Dashboard</DashboardButton>
        </Link>
      </Nav>
      </HeaderWrap>
    </>
  );
};

export default Header;
