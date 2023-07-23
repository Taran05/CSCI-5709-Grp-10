import React from "react";
import { Avatar, Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import ReactDOM from 'react-dom/client';
import image101 from "../../../assets/images/users/101.jpg";
import image102 from "../../../assets/images/users/102.png";
import image103 from "../../../assets/images/users/103.png";
import "./userCardComp.css";
import Users from "../../../assets/data/users.json";

function UserCardComp(props) {
  console.log(props);
  const userId = props.userId ?? 101;
  const name = Users[userId]?.name ?? "";
  const email = Users[userId]?.email ?? "";
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
          <Avatar
            src={
              userId === "101"
                ? image101
                : userId === "102"
                ? image102
                : image103
            }
          />
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
