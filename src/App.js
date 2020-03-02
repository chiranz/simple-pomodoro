import React, { useState } from "react";
import "./app.style.css";
import moment from "moment";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import Break from "./components/Break";

function App() {
  // Break Variables
  const [breakLength, setBreakLength] = useState(300);
  const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
  // Session variables
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();
  return (
    <div className="main-container">
      <Session
        sessionLengthInMinutes={sessionLengthInMinutes}
        setSessionLength={setSessionLength}
      />
      <TimeLeft sessionLength={sessionLength} breakLength={breakLength} />
      <Break
        breakLengthInMinutes={breakLengthInMinutes}
        setBreakLength={setBreakLength}
      />
    </div>
  );
}

export default App;
