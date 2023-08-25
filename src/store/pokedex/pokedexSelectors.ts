import { createSelector } from '@reduxjs/toolkit'
import { Pokedex } from 'pokenode-ts'
import { ERequestStatus } from '../../@types/RequestStatus.types'
import { TPokemonListItem } from '../pokemon/pokemonSlice.types'
import { RootState } from '../store.types'
import { IPokedexState } from './pokedexSlice.types'

export const selectPokedex = (state: RootState): IPokedexState => state.pokedex

export const selectPokedexData = (state: RootState): Pokedex | undefined =>
  createSelector([selectPokedex], ({ data }) => data)(state)

export const selectPokedexRequestStatus = (state: RootState): ERequestStatus =>
  createSelector([selectPokedex], ({ status }) => status)(state)

export const selectPokemonList = (state: RootState): TPokemonListItem[] =>
  createSelector(
    [selectPokedex],
    ({ data }) =>
      data?.pokemon_entries.map((entry) => {
        return {
          label: entry.pokemon_species.name,
          id: entry.entry_number,
        }
      }) || []
  )(state)
