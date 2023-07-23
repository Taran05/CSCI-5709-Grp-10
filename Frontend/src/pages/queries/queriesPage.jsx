import React, { useState } from "react";
import HeaderComp from "../../Components/queries/header/headerComp";
import SidebarComp from "../../Components/queries/sidebar/sidebarComp";
import BodyComp from "../../Components/queries/body/bodyComp";
import "./queriesPage.css";
import Querys from "../../assets/data/queries.json";
import { Grid } from "@mui/material";

function QueriesPage(props) {
  const [value, setValue] = useState("");
  const handleUserClick = (user) => {
    setValue(user);
  };

  const [Queries, setQueries] = useState(Querys);

  const updateQueries = (queries) => {
    debugger;
    setQueries(queries);

    console.log("Printing Quereies: ");
    console.log(Queries);
  };

  const [displayOption, updateDisplayOption] = useState("Pending");
  const changeDisplayOption = (option) => {
    updateDisplayOption(option);
    handleUserClick("");
  };

  return (
    <div className="pageBody">
      <div className="header">
        <HeaderComp
          changeDisplayOption={changeDisplayOption}
          displayOption={displayOption}
        />
      </div>

      <div className="belowHeader container">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <div className="side-bar item">
              <SidebarComp
                handleUserClick={handleUserClick}
                selectedUserId={value}
                displayOption={displayOption}
                Queries={Queries}
              />
            </div>
          </Grid>

          <Grid item xs={9}>
            <div className="body item">
              <BodyComp
                userId={value}
                selectedUserId={value}
                updateQueries={updateQueries}
                Queries={Queries}
                changeDisplayOption={changeDisplayOption}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default QueriesPage;
