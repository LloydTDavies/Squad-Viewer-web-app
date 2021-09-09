import React from 'react';
import { Player } from '../../Interfaces/Player.interface';
import Card from '../UI/Card';

import Styles from './PlayerList.module.css';

const PlayerList: React.FC<PlayerListProps> = (props) => {
  const { players } = props;
  return (
    <Card className={Styles['player-list-card']}>
      <ul>
        {players.map((player) => <li key={Math.random()}>{player.name}</li>)}
      </ul>
    </Card>
  );
};

export interface PlayerListProps {
    players: Player[]
}

export default PlayerList;
