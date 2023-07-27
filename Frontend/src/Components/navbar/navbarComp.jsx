/**
 * @author Amanjot Singh <am854663@dal.ca/B00942293>
 */

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
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const location = useLocation();
  React.useEffect(() => {
    let user1 = location?.state ?? null;
    if (user1 == null) {
      user1 = JSON.parse(localStorage.getItem("user"));
    }
    setUser(user1);
  }, [location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleScroll = () => {
    setAnchorElNav(null);

    // Scroll to the FAQ component
    setTimeout(() => {
      const faqElement = document.getElementById("faq-container");
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);

    // Navigate to the home page ("/") if not already on it
    if (navigate && window.location.pathname !== "/") {
      navigate("/");
    }
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.localStorage.setItem("logout", Date.now()); // new
    setUser(null);
    handleClose();
    navigate("/");
  };

  const redirectToProfileSettings = () => {
    handleClose();
    navigate("/profile-settings");
  };
  const styles = {
    appBarBackground: { background: "#1D267D" },
  };

  console.log(user);

  return (
    <AppBar style={styles.appBarBackground} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              {user === null ? (
                <MenuItem key="FAQ" onClick={handleScroll}>
                  <Link to="/">
                    <Button color="inherit" style={{ fontWeight: "1000" }}>
                      FAQ
                    </Button>
                  </Link>
                </MenuItem>
              ) : null}
              {user === null ? (
                <MenuItem key="Login" onClick={handleCloseNavMenu}>
                  <Link to="/login">
                    <Button color="inherit" style={{ fontWeight: "1000" }}>
                      Login
                    </Button>
                  </Link>
                </MenuItem>
              ) : null}
              {user === null ? (
                <MenuItem key="Signup" onClick={handleCloseNavMenu}>
                  <Link to="/register">
                    <Button color="inherit" style={{ fontWeight: "1000" }}>
                      Signup
                    </Button>
                  </Link>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            {user !== null ? (
              <Button
                key="FAQ"
                onClick={handleScroll}
                sx={{
                  fontSize: "1rem",
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "500",
                }}
              >
                FAQ
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {user === null ? (
              <Link to="/login">
                <Button
                  color="inherit"
                  style={{ color: "white", fontWeight: "1000" }}
                >
                  Login
                </Button>
              </Link>
            ) : null}

            {user === null ? (
              <Link to="/register">
                <Button
                  color="inherit"
                  style={{ color: "white", fontWeight: "1000" }}
                >
                  Signup
                </Button>
              </Link>
            ) : null}
          </Box>
          {user !== null ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                ml: 2,
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <AccountCircleIcon sx={{ fontSize: 40, color: "white" }} />
                  {/* <Avatar sx={{ width: 32, height: 32 }}>Aman</Avatar> */}
                </IconButton>
              </Tooltip>
            </Box>
          ) : null}
        </Toolbar>
      </Container>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={redirectToProfileSettings}>
          <Avatar /> Profile Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import "./navbarComp.css";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import { Link, useNavigate } from "react-router-dom";

// // import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import { styled, useTheme } from "@mui/material/styles";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// const drawerWidth = 240;
// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// const pages = ["FAQ"];

// function ResponsiveAppBar() {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   // const handleDrawerClose = () => {
//   //   setOpen(false);
//   // };
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleScroll = () => {
//     setAnchorElNav(null);

//     // Scroll to the FAQ component
//     setTimeout(() => {
//       const faqElement = document.getElementById("faq-container");
//       if (faqElement) {
//         faqElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 0);

//     // Navigate to the home page ("/") if not already on it
//     if (navigate && window.location.pathname !== "/") {
//       navigate("/");
//     }
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const styles = {
//     appBarBackground: { background: "#1D267D" },
//   };

//   return (
//     <div>
//       <AppBar style={styles.appBarBackground} position="fixed">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerToggle}
//               edge="start"
//               sx={{
//                 marginRight: 5,
//               }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontWeight: 700,
//                 letterSpacing: ".1rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LEARNLY
//             </Typography>

//             {/* Move the dropdown button to the right */}
//             <Box
//               sx={{
//                 display: { xs: "flex", md: "none" },
//                 justifyContent: "flex-end", // Move the button to the right side
//               }}
//             >
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 <MenuItem key="Products" onClick={handleScroll}>
//                   <Link to="/">
//                     <Button color="inherit" style={{ fontWeight: "1000" }}>
//                       FAQ
//                     </Button>
//                   </Link>
//                 </MenuItem>
//                 <MenuItem key="Blog" onClick={handleCloseNavMenu}>
//                   <Link to="/login">
//                     <Button color="inherit" style={{ fontWeight: "1000" }}>
//                       Login
//                     </Button>
//                   </Link>
//                 </MenuItem>
//                 <MenuItem key="Blog" onClick={handleCloseNavMenu}>
//                   <Link to="/register">
//                     <Button color="inherit" style={{ fontWeight: "1000" }}>
//                       Signup
//                     </Button>
//                   </Link>
//                 </MenuItem>
//               </Menu>
//             </Box>

//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href=""
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LEARNLY
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleScroll}
//                   sx={{
//                     fontSize: "1rem",
//                     my: 2,
//                     color: "white",
//                     display: "block",
//                     fontWeight: "500",
//                   }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
//               <Link to="/login">
//                 <Button
//                   color="inherit"
//                   style={{ color: "white", fontWeight: "1000" }}
//                 >
//                   Login
//                 </Button>
//               </Link>
//               <Link to="/register">
//                 <Button
//                   color="inherit"
//                   style={{ color: "white", fontWeight: "1000" }}
//                 >
//                   Signup
//                 </Button>
//               </Link>

//               {/* Rest of your code... */}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <div>
//         <Drawer variant="permanent" open={open}>
//           <List>
//             {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//               <ListItem key={text} disablePadding sx={{ display: "block" }}>
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//               <ListItem key={text} disablePadding sx={{ display: "block" }}>
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </div>
//     </div>
//   );
// }
// export default ResponsiveAppBar;
