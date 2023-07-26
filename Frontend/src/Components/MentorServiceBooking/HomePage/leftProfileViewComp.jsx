//refernce: https://mui.com/material-ui/react-avatar/

import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./leftServiceViewComp.css";
import SendQueryComp from "../../queries/sendQuery/sendQueryComp";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 125,
      height: 125,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const LeftServiceViewComp = () => {
  const [mentor, setMentor] = useState({});
  const location = useLocation();
  const mentorId = location.pathname.split("/")[2];

  useEffect(() => {
    fetch(`http://localhost:3001/api/registerUser/getUserDetails/${mentorId}`)
      .then((response) => response.json())
      .then((data) => setMentor(data.user));
  }, [mentorId]);

  const mentorName = mentor ? `${mentor.firstName} ${mentor.lastName}` : "";

  return (
    <Box className="mentorBox">
      <Avatar {...stringAvatar(mentorName)} />
      <Typography variant="h4" className="mentorName">
        {mentorName}
      </Typography>
      <Typography variant="body1" className="mentorQuery">
        Have a query with our mentor?
      </Typography>
      {/* <Button variant="outlined" color="primary" className="queryButton">
        Ask a query
      </Button> */}

      {/* Added This Comp here to ask queries */}
      <SendQueryComp mentorName={mentorName} mentorId={mentorId} />
    </Box>
  );
};

export default LeftServiceViewComp;
