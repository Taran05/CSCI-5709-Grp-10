import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import UseMediaQuery from "@mui/material/useMediaQuery";

import "./contactInfoComp.css";

export default function contactInfo() {
  const isExtraSmallScreen = UseMediaQuery((theme) =>
    theme.breakpoints.down("xs")
  );
  const isSmallScreen = UseMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = UseMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLargeScreen = UseMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "80px" }}>
        <LocationOnIcon sx={{ marginRight: "8px", color: "#ffffff" }} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            marginRight: "8px",
            color: "#ffffff",
            fontSize: isExtraSmallScreen
              ? "10px"
              : isSmallScreen
              ? "12px"
              : isMediumScreen
              ? "14px"
              : isLargeScreen
              ? "14px"
              : "19px",
          }}
        >
          Address:
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: isExtraSmallScreen
                ? "8px"
                : isSmallScreen
                ? "12px"
                : isMediumScreen
                ? "14px"
                : isLargeScreen
                ? "14px"
                : "19px",
            }}
          >
            3367 Berlin Street, Halifax, NS B3L 3B4
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "80px" }}>
        <PhoneIcon sx={{ marginRight: "8px", color: "#ffffff" }} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            marginRight: "8px",
            color: "#ffffff",
            fontSize: isExtraSmallScreen
              ? "10px"
              : isSmallScreen
              ? "12px"
              : isMediumScreen
              ? "14px"
              : isLargeScreen
              ? "14px"
              : "19px",
          }}
        >
          Phone:
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: isExtraSmallScreen
                ? "10px"
                : isSmallScreen
                ? "12px"
                : isMediumScreen
                ? "14px"
                : isLargeScreen
                ? "14px"
                : "19px",
            }}
          >
            +1 (902) 653-4837
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "80px" }}>
        <EmailIcon sx={{ marginRight: "8px", color: "#ffffff" }} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            marginRight: "8px",
            color: "#ffffff",
            fontSize: isExtraSmallScreen
              ? "10px"
              : isSmallScreen
              ? "12px"
              : isMediumScreen
              ? "14px"
              : isLargeScreen
              ? "14px"
              : "19px",
          }}
        >
          Email:
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: isExtraSmallScreen
                ? "10px"
                : isSmallScreen
                ? "12px"
                : isMediumScreen
                ? "14px"
                : isLargeScreen
                ? "14px"
                : "19px",
            }}
          >
            info@learnly.com
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "80px" }}>
        <LanguageIcon sx={{ marginRight: "8px", color: "#ffffff" }} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            marginRight: "8px",
            color: "#ffffff",
            fontSize: isExtraSmallScreen
              ? "10px"
              : isSmallScreen
              ? "12px"
              : isMediumScreen
              ? "14px"
              : isLargeScreen
              ? "14px"
              : "19px",
          }}
        >
          Website:
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: isExtraSmallScreen
                ? "10px"
                : isSmallScreen
                ? "12px"
                : isMediumScreen
                ? "14px"
                : isLargeScreen
                ? "14px"
                : "19px",
            }}
          >
            learnly.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
