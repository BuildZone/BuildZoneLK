import React from "react";
import BannerHome from "./bannerhome";
import background from "../assets/images/background.png";

const HomePage = () => {
  return (
    <div className="hero_area ">
      <div className="hero_bg_box">
      <div
  className="bg_img_box"
  style={{
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundSize: "100vw 100vh",
    width: "100vw", // Use viewport width
    height: "100vh", // Use viewport height
  }}
></div>

      </div>

      <BannerHome />
    </div>
  );
};

export default HomePage;
