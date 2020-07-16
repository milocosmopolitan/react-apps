import React, { useRef } from 'react';
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import { Transition } from 'react-transition-group';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   flexGrow: 1,
    // },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

import Brand from './brand';
import { IconButton, Button } from '@material-ui/core';

function GrowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window ? window : undefined });

  return (
    <Grow appear={true} in={trigger}>
      {children}
    </Grow>
  );
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window ? window : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// const Brand = styled.div`
//   position: relative;
//   transform-origin: 0 0 0;
// `
// function Brand() {
//   return (
//     <Box width="100px" height="28px">LOGO</Box>
//   )
// }

export default function HideAppBar(props) {
  const appBarRef = useRef(null);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <>
      {/* <Box position="fixed" width="100%" zIndex={1200} paddingTop="15px">
        <Box display="flex" justifyContent="center">
          <Brand parentRef={appBarRef}>
            LOGO
          </Brand>
        </Box>
      </Box> */}
      <AppBar color="transparent" ref={appBarRef} elevation={0}>
        <Box position="absolute" width="100%" top="15px" display="flex" justifyContent="center">
          <Brand parentRef={appBarRef}>
            <Link to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              LOGO
            </Link>
          </Brand>
        </Box>
        {/* <GrowOnScroll>
          <Box width="100px" height="28px">LOGO</Box>
        </GrowOnScroll> */}
        <HideOnScroll {...props}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6">Scroll to Hide App Bar</Typography> */}

            <Box component="div"
              display={{ xs: 'none', sm: 'none', md: 'block' }}
              position="absolute" right="15px">
              {/* <Button>About</Button>
              <Button>Services</Button>
              <Button>Contact</Button> */}
              {props.children}
            </Box>
          </Toolbar>
        </HideOnScroll>
        </AppBar>
        {/* {renderMobileMenu}
        {renderMenu} */}
    </>
  );
}
