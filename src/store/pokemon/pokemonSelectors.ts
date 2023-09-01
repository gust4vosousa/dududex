import { createSelector } from '@reduxjs/toolkit'
import { Pokemon } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { ISelectOption } from '../../components/SelectPokemon/SelectPokemonComponent.types'
import { selectPokemonList } from '../pokedex/pokedexSelectors'
import { RootState } from '../store.types'
import { IPokemonState } from './pokemonSlice.types'

export const selectPokemon = (state: RootState): IPokemonState => state.pokemon

export const selectPokemonData = (state: RootState): Pokemon | undefined =>
  createSelector([selectPokemon], ({ data }) => data)(state)

export const selectPokemonRequestStatus = (state: RootState): ERequestStatus =>
  createSelector([selectPokemon], ({ status }) => status)(state)

export const selectPokemonById = (
  state: RootState,
  pokemonId: number
): ISelectOption | undefined => {
  const pokemonList = selectPokemonList(state)

  return pokemonList.find((pokemon) => pokemon.id === pokemonId)
}
