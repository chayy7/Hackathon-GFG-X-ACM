import { useEffect, useState } from "react";
export default function HeroSec() {
  const words = ["photoshoots", "videos", "advertising", "content", "marketing"];
  const [i, setI] = useState(0), [a, sa] = useState(true), [s, ss] = useState(false), [u, su] = useState(false);
  useEffect(() => { const t = setTimeout(() => ss(true), 2000); return () => clearTimeout(t); }, []);
  useEffect(() => { if (s) { const t = setTimeout(() => su(true), 600); return () => clearTimeout(t); } }, [s]);
  useEffect(() => { if (s) { const it = setInterval(() => { sa(false); setTimeout(() => { setI(v => (v + 1) % words.length); sa(true); }, 500); }, 2000); return () => clearInterval(it); } }, [s]);
  
  
  
  return (
    <main>
      <div className={`hero${u ? " push-up" : ""}`}>
        <div className="ai-design">
          <h1 className="head">
            {["The","AI","design","tool","for","product"].map((t, n) => <span className="anim" key={n}><p>{t}</p></span>)}
            {s && <span className={`change ${a ? "fade-in" : "fade-out"}`}><p>{words[i]}</p></span>}
          </h1>
        </div>
        <div className="secAnim">
          <div className="tagline anim-section"><h2>Build stunning AI product content with your team in real-time.</h2></div>
          <div className="booking-btn anim-section">
            <button className="getStarted">Get Started - It's Free</button>
            <button>Book a Demo</button>
          </div>
        </div>
      </div>
    </main>
  );
}