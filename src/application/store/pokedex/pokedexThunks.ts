import { getPokedexById } from '@/data/services/getPokedex'
import { EPokedexes } from '@/domain/entities/Pokedex/PokedexEntity.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
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
  },
)
