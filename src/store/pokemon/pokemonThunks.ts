import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonByName } from '../../services/getPokemon';
import { EPokemonActionTypes } from './pokemonSlice.types';

export const fetchPokemonByName = createAsyncThunk(
  EPokemonActionTypes.fetchByName,
  async (pokemonName: string) => {
    return await getPokemonByName(pokemonName);
  }
);
