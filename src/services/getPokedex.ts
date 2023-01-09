import { GameClient, Pokedexes } from 'pokenode-ts';
import { clientOptions } from './clientOptions';

const httpClient = new GameClient(clientOptions);

export const getPokedexById = async (id: Pokedexes) =>
  await httpClient.getPokedexById(id);
