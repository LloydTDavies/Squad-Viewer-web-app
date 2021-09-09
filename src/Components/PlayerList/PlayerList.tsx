import React from 'react';
import { Player } from '../../Interfaces/Player.interface';
import Card from '../UI/Card';
import List from '../UI/List';
import ListItem from '../UI/ListItem';

import Styles from './PlayerList.module.css';

const PlayerList: React.FC<PlayerListProps> = (props) => {
  const { players, listName } = props;

  const content = players.length === 0
    ? <p>No players in list.</p>
    : players.map((player) => (
      <ListItem
        key={Math.random()}
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
    ));

  return (
    <Card className={Styles['player-list-card']}>
      <h3>{listName}</h3>
      <br />
      <List>
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
