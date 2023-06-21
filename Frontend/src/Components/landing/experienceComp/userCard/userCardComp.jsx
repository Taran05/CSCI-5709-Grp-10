import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./userCardComp.css";
import { useState } from "react";
import { useEffect } from "react";
import lim from "../../../../assets/images/landing/card/101.jpg";

function UserCardComp({ name, imageSrc, quotes }) {
  console.log(name, imageSrc, quotes);
  return (
    <div className="userCardComp">
      <Card className={"card"}>
        <div className="cardHalfBack"></div>
        <CardMedia
          component="img"
          className={"image"}
          image={require("../../../../assets/images/landing/card/" + imageSrc)}
          alt={name}
        />
        <CardContent>
          <Typography variant="h6" className={"name"}>
            {name}
          </Typography>
          <Typography variant="paragraph" paragraph className={"text"}>
            {quotes}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserCardComp;
