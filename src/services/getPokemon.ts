import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

export const getPokemonByName = async (pokemon: string) =>
  await api.getPokemonByName(pokemon);
