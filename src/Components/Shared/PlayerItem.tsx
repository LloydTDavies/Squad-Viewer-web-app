import React from 'react';
import { Player } from '../../Interfaces/Player.interface';

const PlayerItem: React.FC<PlayerItemProps> = (props) => {
  const { player } = props;
  return (
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
  );
};

export interface PlayerItemProps {
    player: Player;
}

export default PlayerItem;
