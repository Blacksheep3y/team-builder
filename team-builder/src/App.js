import React, { useState } from 'react';
import './App.css';
import Pirates from "./Pirates.jsx";
import PirateForm from "./PirateForm.jsx";

function App() {
  const [pirateMemberState, setPirateMemberState] = useState([
    {
      id: 1,
      name: "Monkey D. Luffy",
      title: "Captain",
      bounty: "1,500,000,000",
      crew: "Straw Hat Pirates" 
    }
  ]);

  const addMemberHandler = newMember => {
    console.log("adding pirate member:", newMember);
    setPirateMemberState([...pirateMemberState, newMember]);
    //Update the state.
  };
  
  return (
    <div className="App">
      <h1>One Piece</h1>
      <h2>Pirates</h2>
      <PirateForm addPirate={addMemberHandler} />
      <Pirates pirates={pirateMemberState} />
    </div>
  );
}

export default App;
