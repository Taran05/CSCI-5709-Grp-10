import React from "react";
import Avatar from "@mui/material/Avatar";
import mentorAvatar from "../../../assets/shivam.jpeg";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

const LeftServiceViewComp = () => {
  const mentorId = useParams();
  const mentorName = "Shivam Lakhanpal";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20% 0 0 5%",
      }}
    >
      <Avatar
        src={mentorAvatar}
        alt="Mentor Avatar"
        sx={{ width: 100, height: 100 }}
      />
      <Typography variant="h4" component="h2" sx={{ marginTop: "10px" }}>
        {mentorName}
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginTop: "10px" }}>
        Have a query with our mentor?
      </Typography>
      <Button variant="outlined" color="primary" sx={{ marginTop: "10px" }}>
        Ask a query
      </Button>
    </Box>
  );
};

export default LeftServiceViewComp;
