import React from "react";
import satData from "./satData";
import './styling.css'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </>
  );
};

export default Buttons;