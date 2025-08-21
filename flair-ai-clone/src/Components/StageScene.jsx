import React, { useState } from "react";
import elementImg from "../assets/element.png"; 
import productImg1 from "../assets/p1.png"; 
import productImg2 from "../assets/p2.png"; 

const StageScene = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="stage-scene">
      <div className="scene-left">
        <div className="element-anim">
          <img src={elementImg} alt="3D element" className="scene-element" />
          <span className="element-label">3D element</span>
          <div className="dotted-box">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
          </div>
        </div>
      </div>
      <div className="scene-right">
        <h1>
          Stage scenes digitally with <br />
          drag &amp; drop props. Bring it <br />
          to life with AI.
        </h1>
        <div
          className="stage-product-img"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            marginTop: "530px",
            marginLeft: "350px",
            marginRight: "auto",
            width: "500px",
            height: "500px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
            transition: "box-shadow 0.2s",
            background: "#232323",
            cursor: "pointer",
          }}
        >
          <img
            src={isHovered ? productImg2 : productImg1}
            alt="Product"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.3s",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default StageScene;