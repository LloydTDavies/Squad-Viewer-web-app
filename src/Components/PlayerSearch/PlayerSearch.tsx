import React, { useState } from 'react';
import { Player } from '../../Interfaces/Player.interface';
import { getPlayerByName } from '../../Services/Player/PlayerSearch.service';
import PlayerItem from '../Shared/PlayerItem';
import Button from '../UI/Button';
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
    if (searchString.length === 0) return;
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
      <Button type="button" onClick={onClickHandler}>Search</Button>
      <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
        <List>
          {playerSearchResults.map((player) => (
            <ListItem
              key={Math.random()}
              onClick={() => addPlayerHandler(player)}
            >
              <PlayerItem player={player} />
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
