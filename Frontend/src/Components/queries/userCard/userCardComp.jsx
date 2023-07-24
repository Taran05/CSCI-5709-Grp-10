import React from "react";
import { Avatar, Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import ReactDOM from 'react-dom/client';
import "./userCardComp.css";
// import Users from "../../../assets/data/users.json";

function UserCardComp(props) {
  const colors = {
    A: "#FF0000",
    B: "#FF8000",
    C: "#FFFF00",
    D: "#80FF00",
    E: "#00FF00",
    F: "#00FF80",
    G: "#00FFFF",
    H: "#0080FF",
    I: "#0000FF",
    J: "#8000FF",
    K: "#FF00FF",
    L: "#FF0080",
    M: "#FF4F4F",
    N: "#FF944D",
    O: "#FFD24D",
    P: "#BFFF4D",
    Q: "#75FF4D",
    R: "#4DFF8A",
    S: "#4DFFF2",
    T: "#4DB5FF",
    U: "#907DFF",
    V: "#E64DFF",
    W: "#FF4DE6",
    X: "#FF4D8A",
    Y: "#FF9999",
    Z: "#FFA07A",
  };

  console.log("user card", props);
  const userId = props.userId ?? -1;
  const name = props.query?.name ?? props.queries[userId]?.name;
  const email = props.query?.email ?? props.queries[userId]?.email;

  return (
    <Card
      className={`userCard ${
        userId === props?.selectedUserId ? "selected-card" : ""
      } ${props.inBody ? "not-clickable" : ""}`}
      variant="outlined"
      onClick={() => props.handleUserClick(userId)}
    >
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: colors[name[0].toUpperCase()] }}>
            {name[0]}
          </Avatar>
          <Box marginLeft={2}>
            <Typography variant="h6" component="div" textAlign="left">
              {name}
            </Typography>
            <Typography variant="body1">{email}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserCardComp;
