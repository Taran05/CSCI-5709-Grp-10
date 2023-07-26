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
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";
function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // React.useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     console.log(storedUser);
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  React.useEffect(() => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        setUser(null);
      }
    };

    window.addEventListener("storage", syncLogout);

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log(storedUser);
      setUser(JSON.parse(storedUser));
    }

    return () => {
      window.removeEventListener("storage", syncLogout);
      window.localStorage.removeItem("logout");
    };
  }, []);

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
              {!user && (
                <MenuItem key="FAQ" onClick={handleScroll}>
                  <Link to="/">
                    <Button color="inherit" style={{ fontWeight: "1000" }}>
                      FAQ
                    </Button>
                  </Link>
                </MenuItem>
              )}
              {!user && (
                <MenuItem key="Login" onClick={handleCloseNavMenu}>
                  <Link to="/login">
                    <Button color="inherit" style={{ fontWeight: "1000" }}>
                      Login
                    </Button>
                  </Link>
                </MenuItem>
              )}
              {!user && (
                <MenuItem key="Signup" onClick={handleCloseNavMenu}>
                  <Link to="/register">
                    <Button color="inherit" style={{ fontWeight: "1000" }}>
                      Signup
                    </Button>
                  </Link>
                </MenuItem>
              )}
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
            {!user && (
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
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {!user && (
              <Link to="/login">
                <Button
                  color="inherit"
                  style={{ color: "white", fontWeight: "1000" }}
                >
                  Login
                </Button>
              </Link>
            )}
            {!user && (
              <Link to="/register">
                <Button
                  color="inherit"
                  style={{ color: "white", fontWeight: "1000" }}
                >
                  Signup
                </Button>
              </Link>
            )}
          </Box>
          {user && (
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
          )}
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
