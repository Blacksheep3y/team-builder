import React from "react";

const Pirates = props => {
  return (
    <div className="pirate-list">
      {props.pirates.map(pirate => (
        <div className="pirate" key={pirate.id}>
          <h3>{pirate.name}</h3>
          <h3>{pirate.title}</h3>
          <h3>{pirate.bounty}</h3>
          <h3>{pirate.crew}</h3>
          <button>{pirate.edit}</button>
        </div>
      ))}
    </div>
  );
};

export default Pirates;
