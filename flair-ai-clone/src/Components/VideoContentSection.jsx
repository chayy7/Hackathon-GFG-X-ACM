import React from "react";
import sampleVideo from "../assets/demo1.mp4";

const VideoContentSection = () => (
  <section className="video-content-section">
    <div className="video-content-inner">
      <div className="video-side">
        <video
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
          className="main-video"
        />
      </div>
      <div className="content-side">
        <h2>Mix & match product with templates</h2>
        <p>
          Test design concepts that convert customers with one click. Build reusable templates at scale.
        </p>
        <a href="#" className="templates-link">
          Start with templates <span className="arrow">&#8594;</span>
        </a>
      </div>
    </div>
  </section>
);

export default VideoContentSection;