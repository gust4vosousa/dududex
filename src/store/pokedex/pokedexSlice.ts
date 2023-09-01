import { createSlice } from '@reduxjs/toolkit'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { IPokedexState } from './pokedexSlice.types'
import { fetchPokedexById } from './pokedexThunks'

const initialState: IPokedexState = { status: ERequestStatus.WAITING }

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokedexById.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = ERequestStatus.SUCCESS
    })
    builder.addCase(fetchPokedexById.pending, (state) => {
      state.status = ERequestStatus.BUSY
    })
    builder.addCase(fetchPokedexById.rejected, (state) => {
      state.status = ERequestStatus.FAILURE
    })
  },
})

export const pokedexReducer = pokedexSlice.reducer
