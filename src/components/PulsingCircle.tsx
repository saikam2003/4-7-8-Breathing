import React, { useState, useEffect } from "react";
import "../styles/animations.css";

const PulsingCircle = () => {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("start");
  const [countdown, setCountdown] = useState(0);
  const [action, setActionText] = useState("start");

  useEffect(() => {
    let timer: number;
    let countdownTimer: number;

    if (active) {
      if (phase === "start") {
        setPhase("breathe-in");
        setActionText("stop");
        setCountdown(4);
        timer = window.setTimeout(() => setPhase("hold"), 4000); // 4 seconds
      } else if (phase === "breathe-in") {
        setCountdown(4);
        timer = window.setTimeout(() => setPhase("hold"), 4000); // 4 seconds
      } else if (phase === "hold") {
        setCountdown(7);
        timer = window.setTimeout(() => setPhase("breathe-out"), 7000); // 7 seconds
      } else if (phase === "breathe-out") {
        setCountdown(8);
        timer = window.setTimeout(() => setPhase("breathe-in"), 8000); // 8 seconds
      }

      countdownTimer = window.setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      setPhase("start");
      setCountdown(0);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, [active, phase]);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
    setActionText("start");
  };

  return (
    <div
      className={`pulsating-circle mt-96 justify-items-center ${
        active ? `phase-${phase}` : ""
      }`}
      onClick={handleClick}
    >
      <div className="text-wrap font-bold text-5xl">
        {phase === "start"
          ? "Start"
          : phase === "breathe-in"
          ? `Breathe In (${countdown})`
          : phase === "hold"
          ? `Hold (${countdown})`
          : `Breathe Out (${countdown})`}
      </div>
    </div>
  );
};

export default PulsingCircle;
