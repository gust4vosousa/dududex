import { Pokemon } from 'pokenode-ts';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { RootState } from '../store.types';
import { IPokemonListItem } from './pokemonSlice.types';

export const selectPokemonData = (state: RootState): Pokemon | undefined =>
  state.pokemon.data;

export const selectPokemonRequestStatus = (state: RootState): ERequestStatus =>
  state.pokemon.status;

export const selectPokemonList = (state: RootState): IPokemonListItem[] =>
  state.pokedex.data?.pokemon_entries.map((entry) => {
    return {
      label: entry.pokemon_species.name,
      id: entry.entry_number
    };
  }) || [];

export const selectPokemonById = (
  state: RootState,
  pokemonId: number
): IPokemonListItem | undefined => {
  const pokemonList = selectPokemonList(state);

  return pokemonList.find((pokemon) => pokemon.id === pokemonId);
};
