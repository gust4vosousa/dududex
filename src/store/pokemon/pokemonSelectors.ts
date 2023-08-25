import { createSelector } from '@reduxjs/toolkit'
import { Pokemon } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { selectPokemonList } from '../pokedex/pokedexSelectors'
import { RootState } from '../store.types'
import { IPokemonState, TPokemonListItem } from './pokemonSlice.types'

export const selectPokemon = (state: RootState): IPokemonState => state.pokemon

export const selectPokemonData = (state: RootState): Pokemon | undefined =>
  createSelector([selectPokemon], ({ data }) => data)(state)

export const selectPokemonRequestStatus = (state: RootState): ERequestStatus =>
  createSelector([selectPokemon], ({ status }) => status)(state)

export const selectPokemonById = (
  state: RootState,
  pokemonId: number
): TPokemonListItem | undefined => {
  const pokemonList = selectPokemonList(state)

  return pokemonList.find((pokemon) => pokemon.id === pokemonId)
}
