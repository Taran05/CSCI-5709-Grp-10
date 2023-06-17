import { Grid, Container, Typography, Box } from "@mui/material";
import "./earnMoreComp.css";
function EarnMoreComp() {
  return (
    <div className="earnMoreComp">
      <Container>
        <Box className="heading">
          <Typography variant="h2" component="h2">
            Creators <strong>earn more</strong> using Learnly
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Container className="discount">
                  {/* <img src={require("../../assets/images/landing/earnMore/discount.png").default} alt="Discount" /> */}
                  <Typography variant="h4" component="h3">
                    Offer Discounts
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={8}>
                <Container className="testimonials">
                  <Typography variant="h5" component="h3">
                    Collect and <strong>highlight</strong> testimonials
                  </Typography>
                </Container>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Container className="pay-wish">
                  <Typography variant="h5" component="h3">
                    Pay as you wish
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={4}>
                <Container className="smart-automations">
                  <Typography variant="h4" component="h3">
                    <strong>24%</strong>
                  </Typography>
                  <br />
                  <Typography variant="h5" component="h3">
                    increase in conversions using automations
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Container className="country-based">
              <Typography variant="h4" component="h3">
                <strong>4x</strong>
              </Typography>
              <br />
              <Typography variant="h5" component="h3">
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
