import { Typography } from "@mui/material";
import "./startPicsComp.css";
import { useState } from "react";
import { useEffect } from "react";

function StartPicsComp() {
  const [currImage, setCurrImage] = useState(0);

  let imageUrls = [
    "assets/images/landing/start/laptop.jpg",
    "assets/images/landing/start/phone.jpg",
    "assets/images/landing/start/study.jpg",
  ];

  function changeImage() {
    setCurrImage((currImage + 1) % 3);
  }

  useEffect(() => {
    setTimeout(() => {
      changeImage();
    }, 3000);
  }, [currImage]);

  return (
    <div className="startPicsComp imageContainer">
      <img
        className="image"
        src={require("../../../../" + imageUrls[currImage])}
      />
    </div>
  );
}

export default StartPicsComp;
