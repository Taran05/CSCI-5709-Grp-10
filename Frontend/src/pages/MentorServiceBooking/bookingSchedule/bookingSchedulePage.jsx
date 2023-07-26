import React, { useState } from "react";
import { Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import LeftViewComponent from "../../../Components/MentorServiceBooking/bookingSchedule/leftViewComp";
import RightViewComponent from "../../../Components/MentorServiceBooking/bookingSchedule/rightViewComp";

const BookingSchedulePage = () => {
  const location = useLocation();
  const service = location.state.service;
  const mentorId = location.state.mentorId;
  const serviceName = service.serviceName;
  const serviceDuration = service.time;
  const servicePrice = service.price;

  return (
    <Grid marginTop="5%" container spacing={4}>
      <Grid item xs={12} sm={4}>
        <Box style={{ height: "95%" }}>
          <LeftViewComponent
            serviceName={serviceName}
            serviceDuration={serviceDuration}
            servicePrice={servicePrice}
            mentorId={mentorId}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box style={{ height: "100%" }}>
          <RightViewComponent
            serviceName={serviceName}
            serviceDuration={serviceDuration}
            servicePrice={servicePrice}
            mentorId={mentorId}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookingSchedulePage;
