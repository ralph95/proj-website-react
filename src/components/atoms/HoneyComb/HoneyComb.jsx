import React from "react";
import "./HoneyComb.css";

const HoneyComb = () => {
  const rows = [];
  const cellsPerRow = 6;
  const totalCells = 24; // Updated from 33 to 24

  for (let i = 0; i < totalCells; i += cellsPerRow) {
    const rowCells = Array.from({ length: cellsPerRow }, (_, j) => {
      const index = i + j;
      if (index >= totalCells) return null;
      return (
        <div className="hex-cell-wrapper" key={index}>
          <div className="hex-cell">
            <a
              className={`hex-content cell-${index + 1}`}
              href="#"
              onClick={(e) => e.preventDefault()}
              role="button"
              aria-label={`Hexagon tile ${index + 1}`}
            >
              <span>Cell {index + 1}</span>
            </a>
          </div>
        </div>
      );
    });

    rows.push(
      <div className="hex-row" key={`row-${i}`}>
        {rowCells}
      </div>
    );
  }

  return <div className="honeycomb-grid">{rows}</div>;
};

export default HoneyComb;
