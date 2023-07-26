import React from "react";
import Avatar from "@mui/material/Avatar";
import mentorAvatar from "../../../assets/shivam.jpeg";
import { Box, Typography, Button } from "@mui/material";
import "./leftServiceViewComp.css";

const LeftServiceViewComp = () => {
  const mentorName = "Shivam Lakhanpal";

  return (
    <Box className="mentorBox">
      <Avatar src={mentorAvatar} alt="Mentor Avatar" className="mentorAvatar" />
      <Typography variant="h4" className="mentorName">
        {mentorName}
      </Typography>
      <Typography variant="body1" className="mentorQuery">
        Have a query with our mentor?
      </Typography>
      <Button variant="outlined" color="primary" className="queryButton">
        Ask a query
      </Button>
    </Box>
  );
};

export default LeftServiceViewComp;
