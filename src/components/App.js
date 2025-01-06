import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import "./App.css";

function App() {
  const [playerData, setPlayerData] = useState([]);

  const fetchPlayerData = async () => {
    const response = await fetch("https://api.sofascore.com/player-data"); // Replace with real API
    const data = await response.json();
    setPlayerData(data);
  };

  return (
    <div>
      <h1>Comunio Player Rating</h1>
      <button onClick={fetchPlayerData}>Fetch Player Data</button>
      <div>
        {playerData.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default App;
