import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "#e3e3e3",
  padding: theme.spacing(2),
}));

const StyledFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const DividerVertical = styled("div")({
  height: "1em",
  width: "1px",
  backgroundColor: "#000",
  margin: "0 1em",
});

const LeftViewComponent = ({ serviceName, serviceDuration, servicePrice }) => {
  return (
    <StyledPaper elevation={3}>
      <div>
        <StyledHeader>
          <Typography variant="h3" gutterBottom component="div">
            Shivam Lakhanpal
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            {serviceName}
          </Typography>
        </StyledHeader>
      </div>
      <StyledFooter>
        <Typography variant="h6">{servicePrice} CAD</Typography>
        <DividerVertical />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EventIcon sx={{ fontSize: "1.2rem", marginRight: "4px" }} />
          <Typography variant="h6">{serviceDuration} of meeting</Typography>
        </Box>
      </StyledFooter>
    </StyledPaper>
  );
};

export default LeftViewComponent;
