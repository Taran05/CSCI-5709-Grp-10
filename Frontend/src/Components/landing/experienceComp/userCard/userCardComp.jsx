import { Typography } from "@mui/material";
import "./userCardComp.css";
import { useState } from "react";
import { useEffect } from "react";

function UserCardComp() {
  const [currImage, setCurrImage] = useState(0);

  let imageUrls = [
    "assets/images/landing/start/law.jpg",
    "assets/images/landing/start/shanks.jpg",
    "assets/images/landing/start/brook.jpg",
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
    <div className="startMessageComp imageContainer">
      <img
        className="image"
        src={require("../../../../" + imageUrls[currImage])}
      />
    </div>
  );
}

export default UserCardComp;
