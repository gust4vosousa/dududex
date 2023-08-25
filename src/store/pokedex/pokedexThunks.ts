import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokedexById } from '../../services/getPokedex'
import { EPokedexActionTypes } from './pokedexSlice.types'
import { EPokedexes } from '../../@types/Entities.types'

export const fetchPokedexById = createAsyncThunk(
  EPokedexActionTypes.fetchById,
  async (id: EPokedexes) => {
    return await getPokedexById(id)
  }
)
