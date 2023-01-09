import { PokemonClient } from 'pokenode-ts';
import { clientOptions } from './clientOptions';

const httpClient = new PokemonClient(clientOptions);

export const getPokemonByName = async (pokemon: string) =>
  await httpClient.getPokemonByName(pokemon);
