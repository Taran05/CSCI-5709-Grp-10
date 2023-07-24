import { Grid, Typography } from "@mui/material";
import "./displayCardComp.css";
import { useState } from "react";
import { useEffect } from "react";
import UserCardComp from "../userCard/userCardComp";
import cardDataImp from "../../../../assets/data/cardData.json";

function DisplayCardComp({ buttonCat }) {
  const [cardData, setCardData] = useState(null);
  const cardList = {
    Data: [101, 102, 103, 101],
    Product: [102, 102, 102, 102],
    MentalHealth: [103, 103, 103, 103],
    StudyAbroad: [101, 103, 103, 101],
    Teach: [103, 102, 101, 102],
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch("../../../../assets/data/cardData.json");
  //     setCardData(data);
  //   };
  //   getData();
  // }, []);

  if (!cardDataImp) {
    return <div>Loading...</div>;
  }

  return (
    <div className="displayCardComp">
      <Grid container spacing={2}>
        {cardList[buttonCat].map((item, index) => (
          <Grid item sm={6} xs={12} md={4} lg={3}>
            <UserCardComp
              name={cardDataImp[item].name}
              quotes={cardDataImp[item].quotes}
              imageSrc={cardDataImp[item].imageSrc}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DisplayCardComp;
