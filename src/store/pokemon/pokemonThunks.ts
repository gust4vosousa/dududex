import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonById, getPokemonByName } from '../../services/getPokemon';
import { EPokemonActionTypes } from './pokemonSlice.types';

export const fetchPokemonByName = createAsyncThunk(
  EPokemonActionTypes.fetchByName,
  async (pokemonName: string) => {
    return await getPokemonByName(pokemonName);
  }
);

export const fetchPokemonById = createAsyncThunk(
  EPokemonActionTypes.fetchById,
  async (pokemonId: number) => {
    return await getPokemonById(pokemonId);
  }
);
