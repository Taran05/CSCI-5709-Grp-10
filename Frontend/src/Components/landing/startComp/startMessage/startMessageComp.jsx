import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import "./startMessageComp.css";
import { purple, grey } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AlignHorizontalRight, StickyNote2 } from "@mui/icons-material";

function StartMessageComp() {
  let navigate = useNavigate();

  const StartPageButton = styled(Button)(({ theme }) => ({
    height: "100%",
    padding: "10px 30px",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const ReadFeedbackButton = styled(Button)(({ theme }) => ({
    height: "100%",
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

  const handleFeedbacks = (e) => {
    navigate("/contact");
  };

  return (
    <div className="startMessageComp">
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <Typography variant="h2" component="h2" fontWeight={600}>
            <span style={{ color: "#5C469C" }}>Start</span> your side hustle
            today
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="body1" component="h2" fontWeight={500}>
            Turn your passion and knowledge into a thriving business. Help your
            audience get ahead in life
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <StartPageButton
                variant="contained"
                onClick={(e) => handleStartMyPage(e)}
                fullWidth
              >
                Start My Page <ArrowForwardIcon AlignHorizontalRight />
              </StartPageButton>
            </Grid>
            <Grid item sm={6}>
              <ReadFeedbackButton
                variant="contained"
                onClick={(e) => handleFeedbacks(e)}
                fullWidth
              >
                <StickyNote2 /> Contact Us
              </ReadFeedbackButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default StartMessageComp;
