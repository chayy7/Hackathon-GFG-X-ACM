import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useInView } from "framer-motion";
import SamsoniteLogo from "../assets/samsonite.png";
import JloBeautyLogo from "../assets/jlobeauty.png";
import AmazonLogo from "../assets/amazon.png";
import SwimOutletLogo from "../assets/swimoutlet.png";
import SheinLogo from "../assets/shein.png";
import BonobosLogo from "../assets/bonobos.png";
import BcgLogo from "../assets/bcg.png";


const CARD_SIZE = 160;
const CARD_MARGIN = 24;
const TOTAL_CARD_WIDTH = CARD_SIZE + CARD_MARGIN;
const logos = [
  { src: SamsoniteLogo, alt: "Samsonite" },
  { src: JloBeautyLogo, alt: "JLO Beauty" },
  { src: AmazonLogo, alt: "Amazon" },
  { src: SwimOutletLogo, alt: "SwimOutlet" },
  { src: SheinLogo, alt: "SHEIN" },
  { src: BonobosLogo, alt: "Bonobos" },
  { src: BcgLogo, alt: "Seventh Brand" },
];
const loopedLogos = [...logos, ...logos, ...logos];


export default function BrandCarousel() {
  const x = useMotionValue(0);
  const totalWidth = logos.length * TOTAL_CARD_WIDTH;
  useAnimationFrame((_, delta) => {
    let next = x.get() - delta * 0.050;
    if (Math.abs(next) >= totalWidth) next += totalWidth;
    x.set(next);
  });
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { amount: 0.4, once: true });

  return (
    <div
      style={{
        background: "#161616",
        padding: "3rem 0",
        overflow: "hidden",
        paddingLeft: 140,
        paddingRight: 140,
        boxSizing: "border-box",
      }}
    >
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          color: "#8e8e8fff",
          textAlign: "center",
          fontWeight: 100,
          fontSize: "1.7rem",
          margin: "0 0 2.5rem 0",
          letterSpacing: ".02em",
        }}
      >
        Used by brands of all sizes and industries
      </motion.h2>
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: `${CARD_MARGIN}px`,
            x,
            willChange: "transform",
          }}
        >
          {loopedLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                width: CARD_SIZE,
                height: CARD_SIZE,
                background: "#141414",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                margin: 0,
                border: "0.1px solid #454545ff",
                padding: 30,
                boxSizing: "border-box",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 1,
                  borderRadius: "1px",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}