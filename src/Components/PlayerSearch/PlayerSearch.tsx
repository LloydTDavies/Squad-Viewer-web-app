import React, { useState } from 'react';
import { Player } from '../../Interfaces/Player.interface';
import { getPlayerByName } from '../../Services/Player/PlayerSearch.service';
import Card from '../UI/Card';
import Input from '../UI/Input';
import List from '../UI/List';
import ListItem from '../UI/ListItem';

const PlayerSearch: React.FC<PlayerSearchProps> = ({ onAddPlayer }) => {
  const [searchString, updateSearchString] = useState('');
  const [
    playerSearchResults,
    updateSearchResults,
  ] = useState(new Array<Player>());

  const onClickHandler = async () => {
    const searchResult = await getPlayerByName(searchString);
    updateSearchResults([...searchResult]);
  };

  const addPlayerHandler = (player: Player) => {
    onAddPlayer(player);
    updateSearchString('');
    updateSearchResults([]);
  };

  return (
    <Card>
      <Input
        type="text"
        value={searchString}
        onChange={(event) => updateSearchString(event.target.value)}
        placeholder="search"
      />
      <button type="button" onClick={onClickHandler}>Search</button>
      <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
        <List>
          {playerSearchResults.map((player) => (
            <ListItem
              key={Math.random()}
              onClick={() => addPlayerHandler(player)}
            >
              <div>
                <div>
                  {player.name}
                  {' '}
                  <img
                    src={player.nationality.icon}
                    alt={player.nationality.name}
                  />
                </div>
                <div>
                  {player.team}
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
};

export interface PlayerSearchProps {
  onAddPlayer: (player: Player) => void;
}

export default PlayerSearch;
