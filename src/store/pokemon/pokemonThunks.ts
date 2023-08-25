import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonById, getPokemonByName } from '../../services/getPokemon'
import { EPokemonActionTypes } from './pokemonSlice.types'

export const fetchPokemonByName = createAsyncThunk(
  EPokemonActionTypes.FETCH_BY_NAME,
  async (pokemonName: string) => await getPokemonByName(pokemonName)
)

export const fetchPokemonById = createAsyncThunk(
  EPokemonActionTypes.FETCH_BY_ID,
  async (pokemonId: number) => await getPokemonById(pokemonId)
)
