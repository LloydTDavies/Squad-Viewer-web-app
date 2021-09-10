import axios from 'axios';
import { Player } from '../../Interfaces/Player.interface';

const ENDPOINT = process.env.REACT_APP_PLAYERS_API_ENDPOINT;
const PLAYERS_API = `${ENDPOINT}/api/v1/players`;

export const getPlayerByName = async (name: string): Promise<Player[]> => {
  const { data } = await axios
    .get<Player[]>(`${PLAYERS_API}?name=${name}`);
  return data;
};
