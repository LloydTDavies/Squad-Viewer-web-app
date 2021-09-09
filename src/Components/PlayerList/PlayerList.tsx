import React from 'react';
import { Player } from '../../Interfaces/Player.interface';
import Card from '../UI/Card';
import List from '../UI/List';
import ListItem from '../UI/ListItem';

import Styles from './PlayerList.module.css';

const PlayerList: React.FC<PlayerListProps> = (props) => {
  const { players } = props;
  return (
    <Card className={Styles['player-list-card']}>
      <List>
        {players.map((player) => (
          <ListItem
            key={Math.random()}
          >
            {player.name}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export interface PlayerListProps {
    players: Player[]
}

export default PlayerList;
