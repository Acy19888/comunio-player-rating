import React, { useState } from "react";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [playerValue, setPlayerValue] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [averagePoints, setAveragePoints] = useState(0);
  const [sofascore, setSofascore] = useState(0);

  const calculateEfficiency = () => {
    if (totalPoints > 0) {
      return (playerValue / totalPoints).toFixed(2);
    }
    return "N/A";
  };

  return (
    <div>
      <h1>Comunio Player Rating</h1>
      <div>
        <label>
          Spielername:
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Spielerwert (€):
          <input
            type="number"
            value={playerValue}
            onChange={(e) => setPlayerValue(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Gesamtpunkte:
          <input
            type="number"
            value={totalPoints}
            onChange={(e) => setTotalPoints(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Durchschnittliche Punkte:
          <input
            type="number"
            value={averagePoints}
            onChange={(e) => setAveragePoints(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Sofascore:
          <input
            type="number"
            value={sofascore}
            onChange={(e) => setSofascore(Number(e.target.value))}
          />
        </label>
      </div>
      <h2>Ergebnisse</h2>
      <p>Spieler: {playerName || "Unbekannt"}</p>
      <p>Effizienz (Wert/Gesamtpunkte): {calculateEfficiency()}</p>
      <p>Sofascore: {sofascore}</p>
    </div>
  );
}

export default App;
