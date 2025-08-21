import React from "react";
import bgImage from "../assets/bg-laptop.webp"; 
import demoVideo from "../assets/demo.mp4";

const Screen = () => {
  return (
    <div className="screen-bg">
      <img src={bgImage} alt="Laptop background" className="laptop-bg" />
      <div className="video-overlay">
        <video
          src={demoVideo}
          autoPlay
          loop
          muted
          className="demo-video"
        />
      </div>
    </div>
  );
};

export default Screen;