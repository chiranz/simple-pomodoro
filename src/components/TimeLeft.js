import React, { useState, useEffect } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

export default function TimeLeft({ breakLength, sessionLength }) {
  const [currentSessionType, setCurrentSessionType] = useState("Session"); // Session or Break
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [intervalId, setIntervalId] = useState(null);
  const isStarted = intervalId !== null;
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const handleStartStop = () => {
    //   Decrement time left every one second
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const intervalId = setInterval(() => {
        setTimeLeft(previousTimeLeft => {
          const newTimeLeft = previousTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          }
          //   if session
          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            setTimeLeft(breakLength);
          } else {
            setCurrentSessionType("Session");
            setTimeLeft(sessionLength);
          }
        });
      }, 1000);
      setIntervalId(intervalId);
    }
  };
  return (
    <div className="section">
      <p>{formattedTimeLeft}</p>
      <p>{currentSessionType}</p>
      <button onClick={handleStartStop}>{isStarted ? "Stop" : "Start"}</button>
    </div>
  );
}
