import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pokedexes } from 'pokenode-ts';
import { getPokedexById } from '../../services/getPokedex';
import { EPokedexActionTypes } from './pokedexSlice.types';

export const fetchPokedexById = createAsyncThunk(
  EPokedexActionTypes.fetchById,
  async (id: Pokedexes) => {
    return await getPokedexById(id);
  }
);
