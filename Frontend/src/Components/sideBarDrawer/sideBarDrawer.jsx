import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MailIcon from "@mui/icons-material/Mail";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";

export default function SideBarDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const list = () => (
    <Box
      sx={{ width: isXS ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {[
          { text: "Calender", icon: <CalendarMonthIcon />, link: "/calendar" },
          { text: "Queries", icon: <QuestionAnswerIcon />, link: "/queries" },
          { text: "Contact us", icon: <MailIcon />, link: "/contact" },
        ].map((item, index) => (
          <Link
            to={item.link}
            key={index}
            underline="none"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      display="flex"
      justifyContent={isXS ? "center" : "flex-start"}
      alignItems="center"
      width="100%"
    >
      <Button onClick={toggleDrawer}>
        More options
        {isXS ? (
          <KeyboardDoubleArrowDownIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </Button>
      <Drawer
        anchor={isXS ? "top" : "left"}
        open={isOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
