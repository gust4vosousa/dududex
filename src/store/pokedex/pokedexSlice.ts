import { createSlice } from '@reduxjs/toolkit';
import { ERequestStatus } from '../../@types/RequestStatus.types';
import { IPokedexState } from './pokedexSlice.types';
import { fetchPokedexById } from './pokedexThunks';

const initialState: IPokedexState = { status: ERequestStatus.waiting };

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokedexById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = ERequestStatus.success;
    });
    builder.addCase(fetchPokedexById.pending, (state) => {
      state.status = ERequestStatus.busy;
    });
    builder.addCase(fetchPokedexById.rejected, (state) => {
      state.status = ERequestStatus.failure;
    });
  }
});

export const pokedexReducer = pokedexSlice.reducer;
