import React from "react";

export default function Break({ setBreakLength, breakLengthInMinutes }) {
  return (
    <div className="section">
      <p id="break-label">Break</p>
      <div className="control">
        <button
          onClick={() =>
            setBreakLength(previousBreakLength => previousBreakLength - 60)
          }
          disabled={breakLengthInMinutes === 0}
        >
          -
        </button>
        <p id="break-length">{breakLengthInMinutes}</p>

        <button
          onClick={() =>
            setBreakLength(previousBreakLength => previousBreakLength + 60)
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
