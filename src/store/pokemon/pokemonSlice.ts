import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from 'pokenode-ts';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { IPokemonState } from './pokemonSlice.types';

const POKEMON_INITIAL_STATE: IPokemonState = { status: ERequestStatus.waiting };

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: POKEMON_INITIAL_STATE,
  reducers: {
    setPokemon: (state: IPokemonState, action: PayloadAction<Pokemon>) => {
      state.data = action.payload;
    },
    setPokemonRequestStatus: (
      state: IPokemonState,
      action: PayloadAction<ERequestStatus>
    ) => {
      state.status = action.payload;
    }
  }
});

export const { setPokemon, setPokemonRequestStatus } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
