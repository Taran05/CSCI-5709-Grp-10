import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import "./topMessageComp.css";
import { purple, grey } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AlignHorizontalRight, StickyNote2 } from "@mui/icons-material";

function TopMessageComp() {
  let navigate = useNavigate();

  const StartPageButton = styled(Button)(({ theme }) => ({
    padding: "10px 30px",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const ReedFeedbackButton = styled(Button)(({ theme }) => ({
    padding: "10px 30px",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: "#D4ADFC",
    },
  }));

  const handleStartMyPage = (e) => {
    navigate("/register");
  };
  return (
    <div className="topMessageComp">
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <Typography variant="h2" component="h2" fontWeight={600}>
            Designed for <span style={{ color: "#5C469C" }}>people</span> making
            impact
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <StartPageButton
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
              >
                Start My Page <ArrowForwardIcon AlignHorizontalRight />
              </StartPageButton>
            </Grid>
            <Grid item sm={6}>
              <ReedFeedbackButton variant="contained">
                <StickyNote2 /> Feedbacks
              </ReedFeedbackButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopMessageComp;
