import { Grid, Container, Typography, Box } from "@mui/material";
import "./earnMoreComp.css";


function EarnMoreComp() {


  return (
    <div className="earnMoreComp">
      <Container className="earnMoreContainer">

        <Box className="heading">
          <Typography variant="h2" component="h2">
            Creators <strong>earn more</strong> using Learnly
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Container className="discount">
                  <Typography variant="h4" component="h3">
                    Offer Discounts
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Container className="testimonials">
                  <Typography variant="h4" component="h3">
                    Collect and <strong>highlight</strong> testimonials
                  </Typography>
                </Container>
              </Grid>
            </Grid>

            <br />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Container className="pay-wish">
                  <Typography variant="h4" component="h3">
                    Pay as <strong>you</strong> wish
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Container className="smart-automations">
                  <Typography variant="h3" component="h3">
                    <strong>24%</strong>
                  </Typography>
                  <br />
                  <Typography variant="h4" component="h3">
                    increase in conversions using automations
                  </Typography>
                </Container>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Container className="country-based">
              <Typography variant="h3" component="h3">
                <strong>4x</strong>
              </Typography>
              <br />
              <Typography variant="h4" component="h3">
                your earnings using country-based pricing
              </Typography>
            </Container>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default EarnMoreComp;
