import { createSlice } from '@reduxjs/toolkit';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { IPokemonState } from './pokemonSlice.types';
import { fetchPokemonByName } from './pokemonThunks';

const POKEMON_INITIAL_STATE: IPokemonState = { status: ERequestStatus.waiting };

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: POKEMON_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = ERequestStatus.success;
    });
    builder.addCase(fetchPokemonByName.pending, (state) => {
      state.status = ERequestStatus.busy;
    });
  }
});

export const pokemonReducer = pokemonSlice.reducer;
