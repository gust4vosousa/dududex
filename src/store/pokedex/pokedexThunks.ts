import { createAsyncThunk } from '@reduxjs/toolkit'
import { EPokedexes } from '../../@types/entities/Pokedex/PokedexEntity.types'
import { getPokedexById } from '../../services/getPokedex'
import { EPokedexActionTypes } from './pokedexSlice.types'

export const fetchPokedexById = createAsyncThunk(
  EPokedexActionTypes.fetchById,
  async (id: EPokedexes) => {
    try {
      const response = await getPokedexById(id)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
)
