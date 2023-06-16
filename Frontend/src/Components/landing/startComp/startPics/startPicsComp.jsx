import { Typography } from "@mui/material";
import "./startPicsComp.css";
import im1 from "../../../../assets/images/landing/start/law.jpg";

function StartPicsComp() {
  let imageUrls = [
    "/src/assets/images/landing/start/law.jpg",
    "/src/assets/images/landing/start/shanks.jpg",
    "/src/assets/images/landing/start/brook.jpg",
  ];

  return (
    <div className="startMessageComp imageContainer">
      {imageUrls.map((imageUrl, index) => (
        <p>{imageUrl}</p>
      ))}
    </div>
  );
}

export default StartPicsComp;
