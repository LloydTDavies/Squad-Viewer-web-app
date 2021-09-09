import React, { useState } from 'react';
import './App.css';
import PlayerList from './Components/PlayerList/PlayerList';
import { Player } from './Interfaces/Player.interface';
import PlayerSearch from './Components/PlayerSearch/PlayerSearch';

const DEFAULT_STATE: Player[] = [
];

function App(): JSX.Element {
  const [players, updatePlayers] = useState(DEFAULT_STATE);

  const onAddPlayerHandler = (player: Player) => {
    updatePlayers((state) => [...state, player]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Squad Viewer</h1>
      </header>
      <main>
        <PlayerSearch onAddPlayer={onAddPlayerHandler} />
        <PlayerList listName="Shortlist" players={players} />
      </main>
    </div>
  );
}

export default App;
