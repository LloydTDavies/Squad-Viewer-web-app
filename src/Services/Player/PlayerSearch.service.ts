import axios from 'axios';
import { Player } from '../../Interfaces/Player.interface';

export const getPlayerByName = async (name: string): Promise<Player[]> => {
  const { data } = await axios
    .get<Player[]>(`http://localhost:8080/api/v1/players?name=${name}`);
  return data;
};
