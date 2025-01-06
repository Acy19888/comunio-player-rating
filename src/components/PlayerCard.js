import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <p>Value: {player.value} €</p>
      <p>Total Points: {player.totalPoints}</p>
      <p>Average Points: {player.averagePoints.toFixed(2)}</p>
      <p>Sofascore: {player.sofascore}</p>
    </div>
  );
}

export default PlayerCard;
