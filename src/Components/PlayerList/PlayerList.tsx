import React from 'react';
import { Player } from '../../Interfaces/Player.interface';
import PlayerItem from '../Shared/PlayerItem';
import Card from '../UI/Card';
import List from '../UI/List';
import ListItem from '../UI/ListItem';

import Styles from './PlayerList.module.css';

const PlayerList: React.FC<PlayerListProps> = (props) => {
  const { players, listName } = props;

  const header = players.length > 0
    ? `${listName} (${players.length})` : listName;

  const content = players.length === 0
    ? <p>No players in list.</p>
    : players.map((player) => (
      <ListItem
        key={Math.random()}
      >
        <PlayerItem player={player} />
      </ListItem>
    ));

  return (
    <Card className={Styles['player-list-card']}>
      <h3>{header}</h3>
      <br />
      <List className={Styles['player-list']}>
        {content}
      </List>
    </Card>
  );
};

export interface PlayerListProps {
  listName: string;
  players: Player[];
}

export default PlayerList;
