import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import img1 from "../assets/onmodel/1.jpeg";
import img2 from "../assets/onmodel/2.jpeg";
import img3 from "../assets/onmodel/3.png";
import img4 from "../assets/onmodel/4.jpeg";
import img5 from "../assets/onmodel/5.jpeg";
import img6 from "../assets/onmodel/6.png";
import img7 from "../assets/onmodel/7.png";
import img8 from "../assets/onmodel/8.png";
import img9 from "../assets/onmodel/9.jpeg";
import img10 from "../assets/onmodel/10.jpeg";
import img11 from "../assets/onmodel/11.jpeg";
import img12 from "../assets/onmodel/12.png";
import img13 from "../assets/onmodel/13.png";

const categories = [
  "On Model Photography",
  "Product Videos",
  "Marketing & Ads",
  "Product Photography",
];
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
];

const CARD_WIDTH = 300;
const VISIBLE_CARDS = 4;
const INITIAL_PADDING = 140;

export default function MarketingSection() {
  const [activeCat, setActiveCat] = useState(0);
  const [start, setStart] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const maxStart = images.length - VISIBLE_CARDS + 1;
  const handlePrev = () => setStart((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStart((prev) => Math.min(prev + 1, maxStart));
  const getTranslateX = () => {
    if (start === maxStart) {
      return -( (start - 1) * (CARD_WIDTH + 32) + INITIAL_PADDING );
    }
    return -(start * (CARD_WIDTH + 32));
  };

  return (
    <div
      style={{
        background: "#161616",
        minHeight: "100vh",
        color: "#fff",
        paddingBottom: 48,
        paddingLeft: 140,
        boxSizing: "border-box"
      }}
    >
      <div style={{ paddingTop: 32, paddingBottom: 12 }}>
        <span style={{ color: "#7ce151", fontSize: 16 }}>
          Create content that matches your brand rules and aesthetic.
        </span>
      </div>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontSize: "4vw",
          fontWeight: 400,
          letterSpacing: "-.01em",
          margin: "0 0 36px 0",
          lineHeight: 1.05,
          color: "#f7f7f7",
        }}
      >
        Generate on brand content<br />for all your business needs.
      </motion.h1>

      <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        position: "relative",
        marginBottom: 32,
        minHeight: 66
      }}>
        <div style={{ display: "flex", gap: 24, flex: 1 }}>
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCat(i)}
              style={{
                background: i === activeCat ? "#101710" : "transparent",
                border: i === activeCat ? "1.5px solid #7ce151" : "1.5px solid #323232",
                color: "#fff",
                fontWeight: 500,
                fontSize: 20,
                padding: "14px 40px",
                borderRadius: 32,
                outline: "none",
                cursor: "pointer",
                transition: "border 0.2s",
                boxShadow: i === activeCat ? "0 0 0 2px #7ce15133" : undefined,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{
          display: "flex",
          gap: 18,
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)"
        }}>
          <button
            onClick={handlePrev}
            disabled={start === 0}
            aria-label="Previous"
            style={{
              background: "#323236",
              border: "none",
              borderRadius: "50%",
              width: 54,
              height: 54,
              color: "#fff",
              fontSize: 26,
              cursor: start === 0 ? "not-allowed" : "pointer",
              opacity: start === 0 ? 0.4 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >←</button>
          <button
            onClick={handleNext}
            disabled={start >= maxStart}
            aria-label="Next"
            style={{
              background: "#323236",
              border: "none",
              borderRadius: "50%",
              width: 54,
              height: 54,
              color: "#fff",
              fontSize: 26,
              cursor: start >= maxStart ? "not-allowed" : "pointer",
              opacity: start >= maxStart ? 0.4 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >→</button>
        </div>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        maxWidth: 1200 + INITIAL_PADDING,
        margin: "0 auto",
        paddingLeft: start === 0 ? INITIAL_PADDING : 0,
        transition: "padding-left 0.4s cubic-bezier(.4,1.4,.7,1)",
      }}>
        <div style={{
          overflow: "hidden",
          flex: 1,
          maxWidth: `${VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * 32}px`,
        }}>
          <motion.div
            animate={{ x: getTranslateX() }}
            transition={{ duration: 0.4, ease: [0.4, 1.4, 0.7, 1] }}
            style={{ display: "flex", gap: 32 }}
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: CARD_WIDTH,
                  height: 300,
                  borderRadius: 20,
                  background: "#181818",
                  overflow: "hidden",
                  boxShadow: "0 8px 40px #0004",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginRight: idx === images.length - 1 ? 140 : 0,
                }}
              >
                <img
                  src={img}
                  alt={`On-model ${idx + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}