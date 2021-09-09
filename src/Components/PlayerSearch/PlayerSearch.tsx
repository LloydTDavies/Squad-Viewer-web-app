import React, { useState } from 'react';
import { Player } from '../../Interfaces/Player.interface';
import { getPlayerByName } from '../../Services/Player/PlayerSearch.service';
import Input from '../UI/Input';
import List from '../UI/List';
import ListItem from '../UI/ListItem';

const PlayerSearch: React.FC<PlayerSearchProps> = ({ onAddPlayer }) => {
  const [searchString, updateSearchString] = useState('');
  const [
    playerSearchResults,
    updateSearchResults,
  ] = useState(new Array<Player>());

  const onClickHandler = () => {
    getPlayerByName(searchString)
      .then((data) => updateSearchResults([...data]));
  };

  const addPlayerHandler = (player: Player) => {
    onAddPlayer(player);
    updateSearchString('');
    updateSearchResults([]);
  };

  return (
    <div>
      <Input
        type="text"
        value={searchString}
        onChange={(event) => updateSearchString(event.target.value)}
        placeholder="search"
      />
      <button type="button" onClick={onClickHandler}>Search</button>
      <div>
        <List>
          {playerSearchResults.map((player) => (
            <ListItem
              key={Math.random()}
              onClick={() => addPlayerHandler(player)}
            >
              {player.name}
              {' '}
              {player.team}
              {' '}
              {player.nationality}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export interface PlayerSearchProps {
  onAddPlayer: (player: Player) => void;
}

export default PlayerSearch;
