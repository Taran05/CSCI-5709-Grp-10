/**
 * @author Amanjot Singh <am854663@dal.ca/B00942293>
 */

import "./profileMangementPage.css";
import React from "react";
// import FormComp from "../../Components/register/form/formComp";
import myteam from "../../assets/images/landing1.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
function ProfileManagementPage() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="register">
      <div className="profileManagement-container">
        <div className="profileManagement-left-div">
          <div className="profileManagement-form">
            {/* <h1 className="profileManagement-form-header">
              CREATE YOUR
              <span style={{ marginLeft: "6px", color: "#5C469C" }}>
                ACCOUNT
              </span>{" "}
            </h1>
            <h2 className="profileManagement-form-header-sub">
              Getting started with Learnly is simple,quick and easy
            </h2> */}
            <Box sx={{ width: "200%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
              </Tabs>
            </Box>

            {/* <FormComp /> */}
          </div>
        </div>
        <div className="profileManagement-right-div">
          <img src={myteam} alt="My Team" width="75%" />
        </div>
      </div>
    </div>
  );
}

export default ProfileManagementPage;
