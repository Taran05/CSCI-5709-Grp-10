import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserCardComp from "../userCard/userCard";
import "./bodyComp.css";
import { Grid } from "@mui/material";

function BodyComp(props) {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event?.target?.value);
  };

  function respondQuery(e, value) {
    e.preventDefault();
    if (value === "") {
      window.alert("Response field cannot be empty");
      return;
    }
    const newQueries = props.Queries;
    const response = value ?? "";
    newQueries[props.userId].isResponded = true;
    newQueries[props.userId].response = response;
    props.updateQueries(newQueries);
    setTextareaValue("");
    props.changeDisplayOption("Pending");
    window.alert("Query moved to Answered");
  }

  return (
    <div className="bodyDiv">
      {props.selectedUserId ? (
        <div>
          <div>
            <UserCardComp userId={props.userId} inBody={true} />
          </div>
          <br />
          <div className="textAreaContainer">
            <Typography className="title" variant="h6" component="h2">
              {props.Queries[props.userId].title}
            </Typography>
            <Box mt={2}>
              <Typography className="text-box query-text-box" variant="body1">
                {props.Queries[props.userId].query}
              </Typography>
            </Box>
            {props.Queries[props.userId].isResponded === false ? (
              <div className="formDiv">
                <form onSubmit={(e) => respondQuery(e, textareaValue)}>
                  <TextField
                    id="outlined-multiline-static"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    label="Message"
                    multiline
                    maxRows={4}
                  />

                  <Button variant="outlined" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            ) : (
              <Box mt={2}>
                <Typography
                  className="text-box responseTextBox"
                  variant="body1"
                >
                  {props.Queries[props.userId].response}
                </Typography>
              </Box>
            )}
          </div>
        </div>
      ) : (
        <div className="noBodyDiv">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <div className="noBodyInnerDiv">Select a Query</div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default BodyComp;
