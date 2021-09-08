import React, { useState } from 'react';

import './App.css';
import PlayerList from './Components/PlayerList/PlayerList';
import { Player } from './Interfaces/Player.interface';

const DEFAULT_STATE: Player[] = [
  { name: 'Cristian Ronaldo' },
  { name: 'Lionel Messi' },
  { name: 'Mo Salah' },
  { name: 'Tony Kroos' },
];

function App(): JSX.Element {
  const [players, updatePlayers] = useState(DEFAULT_STATE);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Squad Viewer</h1>
      </header>
      <main>
        <PlayerList players={players} />
      </main>
    </div>
  );
}

export default App;
