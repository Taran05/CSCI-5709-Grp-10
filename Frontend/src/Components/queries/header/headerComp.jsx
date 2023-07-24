import React from "react";
import "./headerComp.css";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import SendQueryComp from "../sendQuery/sendQueryComp";

function HeaderComp({ changeDisplayOption, displayOption }) {
  return (
    <div>
      <Box className="header-container">
        <h1 className="header-title">Queries</h1>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Button
            variant="outlined"
            className={`header-button ${
              displayOption === "Pending" ? "buttonSelected" : ""
            }`}
            onClick={() => changeDisplayOption("Pending")}
          >
            Pending
          </Button>
          <Button
            variant="outlined"
            className={`header-button ${
              displayOption === "Answered" ? "buttonSelected" : ""
            }`}
            onClick={() => changeDisplayOption("Answered")}
          >
            Answered
          </Button>
          <SendQueryComp mentorId={"test123"} />
        </Stack>
      </Box>
    </div>
  );
}

export default HeaderComp;
