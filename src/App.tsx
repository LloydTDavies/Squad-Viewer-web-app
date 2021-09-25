import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './Components/PlayerList/PlayerList';
import { Player } from './Interfaces/Player.interface';
import PlayerSearch from './Components/PlayerSearch/PlayerSearch';
import logo from './sv-logo.png';

const DEFAULT_STATE: Player[] = [
];

function App(): JSX.Element {
  const [players, updatePlayers] = useState(DEFAULT_STATE);
  const [lists, updateList] = useState([]);

  useEffect(() => {
    axios
      .get<[]>('http://localhost:8000/lists')
      .then((response) => response.data)
      .then((data) => { console.log(data); updateList(data); });
  }, []);

  const onAddPlayerHandler = (player: Player) => {
    updatePlayers((state) => [...state, player]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>
          <h1>SV</h1>
          <img src={logo} alt="squad viewer logo" />
        </span>
      </header>
      <main>
        <PlayerSearch onAddPlayer={onAddPlayerHandler} />
        <PlayerList listName="Shortlist" players={players} />
      </main>
    </div>
  );
}

export default App;
