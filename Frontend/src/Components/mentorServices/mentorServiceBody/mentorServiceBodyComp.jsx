/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */

import React, { useEffect, useState } from "react";
import { Card, Typography, Grid, Box, Divider } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../serviceCard/serviceCardComp";
import { GET_SERVICE_DETAILS } from "../../../utils/apiUrls";
import ServiceCardComp from "../serviceCard/serviceCardComp";

const MentorServiceBodyComp = ({ displayOption, changeDisplayOption }) => {
  const [mentor, setMentor] = useState({});
  const [serviceDetails, setServiceDetails] = useState([]);
  const location = useLocation();
  const localUser = JSON.parse(localStorage.getItem("user"));
  const mentorId = localUser.userName;

  const mentorName = mentor ? `${mentor.firstName} ${mentor.lastName}` : "";

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(GET_SERVICE_DETAILS + "/" + mentorId);
      console.log("mentor body service data", response.data);
      setServiceDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch mentor service details", error);
    }
  };

  const updateDisplayOption = (option) => {
    changeDisplayOption(option);
    fetchData();
    console.log("Again calling get");
  };

  useEffect(() => {
    fetchData();
  }, [displayOption]);

  const handleServiceClick = (service) => {
    // console.log(mentorName);
    // navigate("/bookingSchedule", { state: { service, mentorId, mentorName } });
  };

  console.log("service data:", { serviceDetails }, displayOption);
  return (
    <Grid container spacing={2} className="grid-container-mentor-service">
      {serviceDetails.map((service, index) =>
        service.serviceType === displayOption ? (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCardComp
              service={service}
              changeDisplayOption={updateDisplayOption}
            />
          </Grid>
        ) : null
      )}
      {serviceDetails.length % 2 !== 0 && <Grid item xs={12} sm={6} md={6} />}
    </Grid>
  );
};

export default MentorServiceBodyComp;
