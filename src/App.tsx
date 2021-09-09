import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Components/PlayerList/PlayerList';
import { Player } from './Interfaces/Player.interface';
import PlayerSearch from './Components/PlayerSearch/PlayerSearch';
import { getPlayerByName } from './Services/Player/PlayerSearch.service';

const DEFAULT_STATE: Player[] = [
  { name: 'Cristian Ronaldo' },
  { name: 'Lionel Messi' },
  { name: 'Mo Salah' },
  { name: 'Tony Kroos' },
];

function App(): JSX.Element {
  const [players, updatePlayers] = useState(DEFAULT_STATE);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/v1/players')
  //     .then((res) => res.data)
  //     .then((data) => updatePlayers((state) => {
  //       const newState = [...state, ...data];
  //       return newState;
  //     }));
  // }, []);

  const onSearchHandler = (name: string) => {
    getPlayerByName(name)
      .then((data) => updatePlayers((state) => [...state, ...data]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Squad Viewer</h1>
      </header>
      <main>
        <PlayerSearch
          onSearch={onSearchHandler}
        />
        <PlayerList players={players} />
      </main>
    </div>
  );
}

export default App;
