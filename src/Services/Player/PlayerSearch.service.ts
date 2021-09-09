import axios from 'axios';
import { Player } from '../../Interfaces/Player.interface';

export const getPlayerByName = (name: string): Promise<Player[]> => axios
  .get<Player[]>(`http://localhost:8080/api/v1/players?name=${name}`)
  .then((res) => res.data);
