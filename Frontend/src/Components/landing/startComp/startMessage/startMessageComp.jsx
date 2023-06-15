import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./startMessageComp.css";
import { purple, grey } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AlignHorizontalRight, StickyNote2 } from "@mui/icons-material";

function StartMessageComp() {
  const StartPageButton = styled(Button)(({ theme }) => ({
    padding: "10px 30px",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[800],
    },
  }));

  const ReedFeedbackButton = styled(Button)(({ theme }) => ({
    padding: "10px 30px",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: grey[400],
    },
  }));

  return (
    <div className="startMessageComp">
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h2" component="h2" fontWeight={600}>
            Start your side hustle today
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="body1" component="h2">
            Turn your passion and knowledge into a thriving business. Help your
            audience get ahead in life
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <StartPageButton variant="contained">
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

export default StartMessageComp;
