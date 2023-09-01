import { createSlice } from '@reduxjs/toolkit'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { IPokemonState } from './pokemonSlice.types'
import { fetchPokemonById, fetchPokemonByName } from './pokemonThunks'

const POKEMON_INITIAL_STATE: IPokemonState = { status: ERequestStatus.WAITING }

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: POKEMON_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = ERequestStatus.SUCCESS
    })
    builder.addCase(fetchPokemonByName.pending, (state) => {
      state.status = ERequestStatus.BUSY
    })
    builder.addCase(fetchPokemonByName.rejected, (state) => {
      state.status = ERequestStatus.FAILURE
    })
    builder.addCase(fetchPokemonById.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = ERequestStatus.SUCCESS
    })
    builder.addCase(fetchPokemonById.pending, (state) => {
      state.status = ERequestStatus.BUSY
    })
    builder.addCase(fetchPokemonById.rejected, (state) => {
      state.status = ERequestStatus.FAILURE
    })
  },
})

export const pokemonReducer = pokemonSlice.reducer
