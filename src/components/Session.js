import React from "react";

export default function Session({ sessionLengthInMinutes, setSessionLength }) {
  return (
    <div className="section">
      <p id="session-label">Session</p>
      <div className="control">
        <button
          onClick={() =>
            setSessionLength(
              previousSessionLength => previousSessionLength - 60
            )
          }
          disabled={sessionLengthInMinutes === 0}
        >
          -
        </button>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button
          onClick={() =>
            setSessionLength(
              previousSessionLength => previousSessionLength + 60
            )
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
