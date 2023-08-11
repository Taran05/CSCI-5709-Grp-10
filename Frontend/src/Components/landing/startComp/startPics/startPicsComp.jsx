/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import { Typography } from "@mui/material";
import "./startPicsComp.css";
import { useState } from "react";
import { useEffect } from "react";

function StartPicsComp() {
  const [currImage, setCurrImage] = useState(0);

  let imageUrls = [
    "assets/images/landing/start/learning.png",
    "assets/images/landing/start/teacher.png",
    "assets/images/landing/start/boy.png",
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
