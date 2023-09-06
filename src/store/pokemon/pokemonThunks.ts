import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getEvolutionChain,
  getPokemonById,
  getPokemonSpeciesById,
} from '../../services/getPokemon'
import { EPokemonActionTypes } from './pokemonSlice.types'

export const fetchPokemonById = createAsyncThunk(
  EPokemonActionTypes.FETCH_BY_ID,
  async (pokemonId: number) => {
    try {
      const pokemon = await getPokemonById(pokemonId)
      const species = await getPokemonSpeciesById(pokemonId)
      const evolutionChain = await getEvolutionChain(
        species.evolution_chain.url
      )

      return { evolutionChain, pokemon, species }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
)
