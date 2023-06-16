// import React, { useEffect, useState } from "react";
// import "./navbarComp.css";
// import Button from "@mui/material/Button";
// import { Link, useLocation } from "react-router-dom";

// function NavbarComp() {
//   const location = useLocation();
//   const [currentPath, setCurrentPath] = useState("");

//   useEffect(() => {
//     const url = location.pathname;
//     setCurrentPath(url);
//     console.log(url);
//   }, [location]);

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="logo">Learnly</div>
//         {currentPath === "/login" ? (
//           <Link to="/register" className="nav-link">
//             <Button
//               variant="contained"
//               sx={{ bgcolor: "black", color: "white" }}
//               className="login-btn"
//             >
//               Register
//             </Button>
//           </Link>
//         ) : (
//           <Link to="/login" className="nav-link">
//             <Button
//               variant="contained"
//               sx={{ bgcolor: "black", color: "white" }}
//               className="login-btn"
//             >
//               Login
//             </Button>
//           </Link>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default NavbarComp;

import "./navbarComp.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import { Link, useLocation } from "react-router-dom";
const pages = ["FAQ"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const styles = {
    appBarBackground: { background: "#1D267D" },
  };

  return (
    <AppBar style={styles.appBarBackground} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Icon style={styles.icon} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LEARNLY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="Products" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">FAQ</Typography>
              </MenuItem>
              {/* <MenuItem key="Pricing" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Pricing</Typography>
              </MenuItem>
              <MenuItem key="Blog" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Blog</Typography>
              </MenuItem> */}
              <MenuItem key="Blog" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem key="Blog" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Signup</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LEARNLY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "1rem",
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "500",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link to="/login">
              <Button
                color="inherit"
                style={{ color: "white", fontWeight: "1000" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                color="inherit"
                style={{ color: "white", fontWeight: "1000" }}
              >
                Signup
              </Button>
            </Link>

            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                 
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem> */}
              {/* ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
