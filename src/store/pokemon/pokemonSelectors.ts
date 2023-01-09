import { RootState } from '../store.types';

export const selectPokemon = (state: RootState) => state.pokemon.data;
export const selectPokemonStatus = (state: RootState) => state.pokemon.status;
