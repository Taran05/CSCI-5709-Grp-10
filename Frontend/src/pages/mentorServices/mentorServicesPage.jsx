/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 * Code resude from A1.
 */
import React, { useEffect, useState } from "react";
import PageHeaderComp from "../../Components/mentorServices/header/headerComp";
import "./mentorServicesPage.css";
//import Querys from "../../assets/data/queries.json";
import { Grid } from "@mui/material";
import axios from "axios";
import { GET_QUERY } from "../../utils/apiUrls";
import { SnackbarProvider } from "notistack";
import { useNavigate } from "react-router-dom";
// import EditMentorServicesComp from "../../Components/mentorServices/editMentorServices/editMentorServicesComp";
import MentorServiceBodyComp from "../../Components/mentorServices/mentorServiceBody/mentorServiceBodyComp";

function MentorServicesPage(props) {
  // const [value, setValue] = useState("");

  // const handleUserClick = (user) => {
  //   setValue(user);
  //   console.log("Update id:", user);
  // };

  const navigate = useNavigate();
  const [displayOption, updateDisplayOption] = useState("1:1");

  useEffect(() => {
    const fetchData = async () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      console.log("Printing local user from mentore service:", localUser);

      if (!localUser) {
        navigate("/login");
      }
    };

    fetchData();
  }, []);

  const changeDisplayOption = (option) => {
    console.log("Logging...", { option });
    updateDisplayOption(option);
    // handleUserClick("");
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="queryPageBody">
        <div className="header">
          {/* <HeaderComp
          changeDisplayOption={changeDisplayOption}
          displayOption={displayOption}
        /> */}

          <PageHeaderComp
            pageTitle="Services"
            changeDisplayOption={changeDisplayOption}
            displayOption={displayOption}
          />
        </div>

        <div className="belowHeader container">
          <MentorServiceBodyComp
            displayOption={displayOption}
            changeDisplayOption={changeDisplayOption}
          />
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default MentorServicesPage;
