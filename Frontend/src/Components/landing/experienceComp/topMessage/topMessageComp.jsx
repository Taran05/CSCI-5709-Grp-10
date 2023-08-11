/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import "./topMessageComp.css";
import { purple, grey } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AlignHorizontalRight, StickyNote2 } from "@mui/icons-material";
import { useState } from "react";
import DisplayCardComp from "../displayCard/displayCardComp";

function TopMessageComp() {
  const [buttonCat, setButtonCat] = useState("Data");

  const CardTypeButton = styled(Button)(({ theme }) => ({
    padding: "10px 30px",
    fontWeight: 600,
    borderRadius: "20px",
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const handleStartMyPage = (e) => {
    setButtonCat(e.target.value);
  };
  return (
    <div className="topMessageComp">
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <Typography
            variant="h2"
            className="startMessageCompH2"
            component="h2"
            fontWeight={600}
          >
            Designed for <span style={{ color: "#5C469C" }}>people</span> making
            impact
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Grid container spacing={1}>
            <Grid className="buttonGridItem" item sm={2}>
              <CardTypeButton
                value="Data"
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
              >
                Data
              </CardTypeButton>
            </Grid>

            <Grid className="buttonGridItem" item sm={2}>
              <CardTypeButton
                value="Product"
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
              >
                Product
              </CardTypeButton>
            </Grid>
            <Grid className="buttonGridItem" item sm={3}>
              <CardTypeButton
                value="MentalHealth"
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
              >
                Mental Health
              </CardTypeButton>
            </Grid>
            <Grid className="buttonGridItem" item sm={3}>
              <CardTypeButton
                value="StudyAbroad"
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
              >
                Study Abroad
              </CardTypeButton>
            </Grid>
            <Grid className="buttonGridItem" item sm={2}>
              <CardTypeButton
                value="Teach"
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
              >
                Teach
              </CardTypeButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12}>
          <DisplayCardComp buttonCat={buttonCat} />
        </Grid>
      </Grid>
    </div>
  );
}

export default TopMessageComp;
